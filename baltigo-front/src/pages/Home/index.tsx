import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import style from './Home.module.scss'


const Home = () => {
    return (
        <>
            <div className={style.padding}>
                <h1 className={style.titulo}>Ínicio</h1>
                <p>A Baltigo Engenharia é uma empresa especializada em projetos e construções na área de engenharia civil. Com uma equipe altamente capacitada e comprometida com a excelência, temos como objetivo transformar ideias em soluções práticas e eficientes para nossos clientes.</p>

                <p>Nosso time é formado por engenheiros, arquitetos e técnicos especializados em todas as etapas da construção, desde o planejamento até a entrega final do projeto. Além disso, contamos com tecnologias avançadas e materiais de alta qualidade para garantir a eficiência e segurança de nossos projetos.</p> 

                <p>Nos orgulhamos de oferecer serviços personalizados e atenção aos detalhes, garantindo que nossos clientes tenham a melhor experiência possível. Nós acreditamos que a construção é mais do que apenas a criação de edifícios e estruturas, é a possibilidade de transformar sonhos em realidade e deixar um impacto positivo na sociedade.</p> 

                <p>Navegue pelo nosso site para conhecer mais sobre nossos serviços e projetos realizados. Entre em contato conosco para discutir suas necessidades e como podemos ajudá-lo a transformar suas ideias em realidade.</p>

                <p>A equipe da Baltigo Engenharia agradece sua visita e espera trabalhar com você em breve. Juntos, vamos construir o futuro.</p>

            </div>
        </>
    );
}

export default Home;