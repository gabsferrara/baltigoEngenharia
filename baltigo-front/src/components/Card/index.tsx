import React from 'react'
import style from './Card.module.scss'
import Open from './Open'
import Close from './Close'
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import { ICard } from '../../types/ICard';


interface Props{
    card: ICard
    changeView: (cardSelecionado: ICard) => void
}

export default function Card({card, changeView}: Props) {

    return (
        <div className={style.card}>
            <div className={style.cabecalho}> {card.titulo}</div>
            <div className={style.conteudo}>
                {card.info? <Open conteudo={card.conteudo}/> : <Close imagem={card.imagem}/>}
            </div>
            <div className={style.rodape}>
                <Button variant="text" sx={{color: orange[500]}} onClick={() => changeView(card)}>Info</Button>
            </div>
        </div>
    )
}




