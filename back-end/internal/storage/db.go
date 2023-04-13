package storage

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type DB struct {
	Client     *mongo.Client
	Collection *mongo.Collection
}

func Connect(collectionName string) (*DB, error) {
	// Define a URI de conexão com o MongoDB.
	// uri := "mongodb://gabs:123456@localhost:27017"
	uri := "mongodb://localhost:27017/"

	// Cria uma conexão com o MongoDB.
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		return nil, err
	}

	// Seleciona o banco de dados e a coleção.
	db := client.Database("baltigoDatabase")
	collection := db.Collection(collectionName)

	return &DB{
		Client:     client,
		Collection: collection,
	}, nil
}

func (d *DB) Close() {
	if err := d.Client.Disconnect(context.Background()); err != nil {
		log.Fatal(err)
	}
}

func (db *DB) GetAll() ([]bson.M, error) {
	// Acessa a coleção especifica do banco de dados.
	collection := db.Collection

	// Define um filtro vazio para recuperar todos os documentos da coleção.
	filter := bson.M{}

	// Faz uma consulta para recuperar todos os documentos da coleção.
	cursor, err := collection.Find(context.Background(), filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.Background())

	// Declara uma variável para armazenar os documentos da coleção.
	var docs []bson.M

	// Itera sobre o cursor para recuperar cada documento da coleção.
	for cursor.Next(context.Background()) {
		var doc bson.M
		if err := cursor.Decode(&doc); err != nil {
			return nil, err
		}
		docs = append(docs, doc)
	}

	// Verifica se houve algum erro durante a iteração.
	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return docs, nil
}

func (db *DB) Add(document interface{}) error {
	_, err := db.Collection.InsertOne(context.Background(), document)
	if err != nil {
		return err
	}
	return nil
}
