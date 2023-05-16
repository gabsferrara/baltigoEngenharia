import style from './AboutUs.module.scss'
import gif from '../../assets/img/gif/TesteGifcanvas.gif'
import { SubtitlesOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'

export default function AboutUs() {
    return (
        <>
            <div className={style.padding}>
                <h1>Sobre nós</h1>
                {/* <img className={style.imagem} src={gif}></img> */}
                <h2>Missão</h2>
                <p>Nossa missão é fornecer soluções de engenharia civil inovadoras e de alta qualidade, superando as expectativas dos nossos clientes. Buscamos contribuir para o desenvolvimento de projetos sustentáveis, promovendo o crescimento das comunidades onde atuamos.</p>
                <h2>Objetivo</h2>
                <p>Nosso objetivo é estabelecer uma reputação sólida como uma empresa comprometida com a excelência técnica, o atendimento personalizado e a entrega de projetos de sucesso. Almejamos ser reconhecidos como parceiros confiáveis, cumprindo prazos e superando as expectativas dos nossos clientes.</p>
                <h2>Cultura</h2>
                <p>Nossa cultura empresarial é pautada pelo comprometimento em oferecer serviços de engenharia civil de excelência, superando as expectativas dos clientes. Buscamos constantemente aprimorar nossas práticas, promover a inovação, valorizar o trabalho em equipe e agir com ética e responsabilidade, visando sempre a satisfação dos nossos clientes e o desenvolvimento sustentável.</p>
            </div>
        </>
    )
}