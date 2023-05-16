package main

import (
	"encoding/json"
	"fmt"
	"mime/multipart"
	"net/http"

	"back-end-baltigo/internal/storage"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
)

type Job struct {
	Titulo   string `json:"titulo"`
	Conteudo string `json:"conteudo"`
	Imagem   string `json:"imagem"`
	Info     bool   `json:"info"`
	ID       string `json:"id"`
}

type Job2 struct {
	Titulo string         `json:"titulo"`
	Imagem multipart.File `json:"imagem"`
}

type JobService interface {
	GetAll() []Job
	GetOne(id string) Job
	Delete()
	Update()
}

var jobs []Job

func init() {
}

func main() {
	r := mux.NewRouter()

	cors := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}), // Permite todos os domínios
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type"}),
	)
	r.Use(cors)

	r.HandleFunc("/getAllJobs", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		connection, err := storage.Connect("jobs")
		if err != nil {
			w.Write([]byte("Erro ao conectar"))
			return
		}
		defer connection.Close()

		documentos, err := connection.GetAll()
		if err != nil {
			w.Write([]byte("Erro ao pegar a colecao" + err.Error()))
			return
		}

		var jobs []Job
		for _, doc := range documentos {
			var job Job
			bsonBytes, err := bson.Marshal(doc)
			if err != nil {
				fmt.Print("Erro ao separar documentos em documento")
			}
			err = bson.Unmarshal(bsonBytes, &job)
			if err != nil {
				fmt.Print("Erro ao converter byte no Job")
			}
			jobs = append(jobs, job)
		}

		jobsJSON, _ := json.Marshal(jobs)
		w.Write(jobsJSON)
	}).Methods("GET")

	// Handler para atualizar um trabalho pelo ID
	r.HandleFunc("/EditJob", func(w http.ResponseWriter, r *http.Request) {

		var job Job
		err := json.NewDecoder(r.Body).Decode(&job)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		fmt.Printf("Antes: %+v ", jobs[1])

		for i, j := range jobs {
			if j.ID == job.ID {
				jobs[i] = job
				break
			}
		}

		fmt.Printf("Depois: %+v ", jobs[1])

		fmt.Fprintf(w, "Job recebido com sucesso!\n")

	}).Methods("POST")

	r.HandleFunc("/AddJob", func(w http.ResponseWriter, r *http.Request) {
		connection, errCon := storage.Connect("jobs")
		if errCon != nil {
			http.Error(w, "Erro ao conectar - "+errCon.Error(), http.StatusBadRequest)
			return
		}
		defer connection.Close()

		var job Job

		errConverter := json.NewDecoder(r.Body).Decode(&job)
		if errConverter != nil {
			http.Error(w, "Erro ao converter em Job -"+errConverter.Error(), http.StatusBadRequest)
			return
		}
		errAdd := connection.Add(job)
		if errAdd != nil {
			http.Error(w, "Erro ao Adicionar -"+errAdd.Error(), http.StatusBadRequest)
			return
		}
	}).Methods("POST")

	r.HandleFunc("/AddJob2", func(w http.ResponseWriter, r *http.Request) {
		connection, errCon := storage.Connect("jobs2")
		if errCon != nil {
			http.Error(w, "Erro ao conectar - "+errCon.Error(), http.StatusBadRequest)
			return
		}
		defer connection.Close()
		err := r.ParseMultipartForm(32 << 20)
		if err != nil {
			fmt.Print(err.Error())
			return
		}
		form := r.MultipartForm
	// 	jobs := Job2{Titulo: form.Value["titulo"][0],
	// Imagem: form.Value["imagem"][0],}
		fmt.Println(form)

		// return

		// r.ParseMultipartForm(10 << 20)
		// jobsJSON := r.FormValue("informacoes")
		// jobs := Job2{}
		// err := json.Unmarshal([]byte(jobsJSON), &jobs)
		// if err != nil {
		// 	http.Error(w, "Erro ao converter em Job "+err.Error(), http.StatusBadRequest)
		// 	return
		// }
		// errAdd := connection.Add(jobs)
		// if errAdd != nil {
		// 	http.Error(w, "Erro ao Adicionar -"+errAdd.Error(), http.StatusBadRequest)
		// 	return
		// }

		// w.Write([]byte("Deu certo"))

	}).Methods("POST")

	http.ListenAndServe(":8080", r)
}
