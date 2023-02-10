import BaltigoCinza from '../../assets/img/logos/Baltigo-Cinza.png'
import Econt from '../../assets/img/logos/e-Scontorno.png'
import EBaltigo from '../../assets/img/logos/E-Contorno-min.jpg'
import Hamburguer from '../../assets/img/logos/menuhamburguer.png'
import x from '../../assets/img/logos/x.png'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'



export default function Navbar() {

    return (
        <>
            <header className={style.header}>
                <nav className={style.navPc}>
                    <Link to='/'><img src={BaltigoCinza}></img></Link>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/Servicos'}>Servicos</Link></li>
                        <li><Link to={'/SobreNos'}>Quem somos nós</Link></li>
                        <li><Link to={'/Contato'}>Contato</Link></li>
                    </ul>
                </nav>
                <nav className={style.navMobile}>
                    <Link to='/'><img src={EBaltigo}></img></Link>
                    <div className={style.menu}>
                        <img src={Hamburguer} className= {style.icon}></img>
                        <img src={x} className= {style.icon}></img>
                        <ul>
                            <li><Link to={'/'}>Inicio</Link></li>
                            <li><Link to={'/Servicos'}>Servicos</Link></li>
                            <li><Link to={'/SobreNos'}>Quem somos nós</Link></li>
                            <li><Link to={'/Contato'}>Contato</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}