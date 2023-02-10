import React from 'react'
import style from './Close.module.scss'
import Baltigo from '../../../assets/img/cards/ART.png'

interface Props {
    imagem: string
}

export default function Close ({imagem}: Props) {
    return (
        <>
            <div className={style.body}>
                <img src={imagem}></img>               
            </div>
        </>
    )
}