import { useState } from 'react';
import style from './Admin.module.scss'
import { ICard } from '../../types/ICard'
import ART from '../../assets/img/cards/ART.png'
import Reforma from '../../assets/img/cards/Reforma.png'
import Laudo from '../../assets/img/cards/Laudos.png'
import Vistorias from '../../assets/img/cards/Vistoria.png'
import Regularizacoes from '../../assets/img/cards/Regularizacoes.png'
import Construcoes from '../../assets/img/cards/Construcoes.png'
import { v4 as uuidv4 } from 'uuid'
import Form from '../../components/FormAdmin';
import axios from 'axios';


export default function Admin() {

    const [cards, setCards] = useState<ICard[] | []>(
        [
            {
                titulo: 'ART',
                conteudo: 'A ART é o documento que define, para os efeitos legais, os responsáveis técnicos pelo desenvolvimento de atividade técnica no âmbito das profissões abrangidas pelo Sistema Confea/Crea.',
                imagem: ART,
                info: false,
                id: uuidv4()
            },
            {
                titulo: 'Reforma',
                conteudo: 'Qualquer alteração nas condições da edificação com o objetivo de recuperar, melhorar ou ampliar suas condições de habitabilidade, uso ou segurança, e que não seja manutenção. Isso vale mesmo que não aconteça mudança de função, ou seja, que o espaço alterado não passe a ser usado para outro fim.',
                imagem: Reforma,
                info: false,
                id: uuidv4()
            },
            {
                titulo: 'Laudos',
                conteudo: 'É um relatório emitido por um engenheiro especializado, logo após os processos de análise e avaliação, a respeito de um problema ou caso específico.',
                imagem: Laudo,
                info: false,
                id: uuidv4()
            },
            {
                titulo: 'Vistorias',
                conteudo: 'Objetivo de avaliar a situação do ambiente de forma antecipada e preventiva. Essa análise pode ser feita tanto em obras como em estruturas que ainda estão em construção e deve gerar relatórios analíticos, com todas as informações necessárias sobre as condições do local.',
                imagem: Vistorias,
                info: false,
                id: uuidv4()
            },
            {
                titulo: 'Regularizações',
                conteudo: 'É o procedimento pelo qual um imóvel inapto juridicamente torna-se apto.',
                imagem: Regularizacoes,
                info: false,
                id: uuidv4()
            },
            {
                titulo: 'Construções',
                conteudo: 'É a execução do projeto previamente elaborado de uma edificação',
                imagem: Construcoes,
                info: false,
                id: uuidv4()
            }
        ]
    );

    const handleFormSubmit = (card: ICard) => {
        console.log(card);     
        axios.post<ICard>(`http://localhost:8080/EditJob/1`)
    };


    return (
        <>
            <div className={style.padding}>
                <h1>Editar servicos</h1>
                {cards.map((card) => (
                    <Form onSubmit={handleFormSubmit} initialData={card} key={card.id} />
                ))}
                
            </div>
        </>
    )
}

