package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/google/uuid"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Job struct {
	Titulo   string `json:"titulo"`
	Conteudo string `json:"conteudo"`
	Imagem   string `json:"imagem"`
	Info     bool   `json:"info"`
	ID       string `json:"id"`
}

type JobService interface {
	GetAll() []Job
	GetOne(id string) Job
	Delete()
	Update()
}

var jobs []Job

func init() {
	jobs = make([]Job, 6)
	jobs[0] = Job{
		Titulo:   "ART",
		Conteudo: "A ART é o documento que define, para os efeitos legais, os responsáveis técnicos pelo desenvolvimento de atividade técnica no âmbito das profissões abrangidas pelo Sistema Confea/Crea.",
		Imagem:   "../../assets/img/cards/ART.png",
		Info:     false,
		ID:       uuid.New().String(),
	}

	jobs[1] = Job{
		Titulo:   "Reforma",
		Conteudo: "Qualquer alteração nas condições da edificação com o objetivo de recuperar, melhorar ou ampliar suas condições de habitabilidade, uso ou segurança, e que não seja manutenção. Isso vale mesmo que não aconteça mudança de função, ou seja, que o espaço alterado não passe a ser usado para outro fim.",
		Imagem:   "../../assets/img/cards/Reforma.png",
		Info:     false,
		ID:       "IDREFORMA",
	}

	jobs[2] = Job{
		Titulo:   "Laudos",
		Conteudo: "É um relatório emitido por um engenheiro especializado, logo após os processos de análise e avaliação, a respeito de um problema ou caso específico.",
		Imagem:   "../../assets/img/cards/Laudos.png",
		Info:     false,
		ID:       uuid.New().String(),
	}
	jobs[3] = Job{
		Titulo:   "Vistorias",
		Conteudo: "Objetivo de avaliar a situação do ambiente de forma antecipada e preventiva. Essa análise pode ser feita tanto em obras como em estruturas que ainda estão em construção e deve gerar relatórios analíticos, com todas as informações necessárias sobre as condições do local.",
		Imagem:   "../../assets/img/cards/Vistoria.png",
		Info:     false,
		ID:       uuid.New().String(),
	}

	jobs[4] = Job{
		Titulo:   "Regularizações",
		Conteudo: "É o procedimento pelo qual um imóvel inapto juridicamente torna-se apto.",
		Imagem:   "../../assets/img/cards/Regularizacoes.png",
		Info:     false,
		ID:       uuid.New().String(),
	}

	jobs[5] = Job{
		Titulo:   "Construções",
		Conteudo: "É a execução do projeto previamente elaborado de uma edificação",
		Imagem:   "../../assets/img/cards/Construcoes.png",
		Info:     false,
		ID:       uuid.New().String(),
	}

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

		jobsJSON, err := json.Marshal(jobs)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

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

	http.ListenAndServe(":8080", r)
}
