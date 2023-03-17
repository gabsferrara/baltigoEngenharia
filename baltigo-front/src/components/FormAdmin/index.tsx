import React, { useState } from 'react';
import { ICard } from '../../types/ICard'
import './FormAdmin.module.scss'


interface Props {
    onSubmit: (card: ICard) => void;
    initialData: ICard;
}

const Form: React.FC<Props> = ({ onSubmit, initialData }) => {
    const [card, setCards] = useState<ICard>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCards((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(card);
    };

    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="Titulo">Titulo:</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={card.titulo}
                    onChange={handleInputChange}
                />

                <label htmlFor="conteudo">Conteudo:</label>
                <input
                    type="text"
                    id="conteudo"
                    name="conteudo"
                    value={card.conteudo}
                    onChange={handleInputChange}
                />
                <label htmlFor="imagem">Imagem:</label>
                <input
                    type="file"
                    id="imagem"
                    name="imagem"
                    accept='image/*'
                    onChange={handleInputChange}
                />

                <button type="submit">Salvar</button>
            </form>
    );
};

export default Form;