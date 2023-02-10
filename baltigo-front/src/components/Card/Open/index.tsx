import React from 'react'
import style from './Open.module.scss'


interface Props {
    conteudo: string
}

export default function Open ({conteudo}: Props) {
    return (
        <>
            <div className={style.body}>
                {conteudo}
            </div>
        </>
    )
}