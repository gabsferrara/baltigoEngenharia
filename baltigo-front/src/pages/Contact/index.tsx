import style from './Contact.module.scss'
import wpp from '../../assets/img/logos/wpp.png'
import insta from '../../assets/img/logos/insta.png'

    const text = "Olá, estou a procura de profissionais para construir meu sonho.";


    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=<+5511915788274>&text=`+ text);
    };

    const handleClickInsta = () => {
        window.open(`https://www.instagram.com/baltigo_engenharia/`);
    };

    export default function Contact() {
        return (
            <>
                <div className={style.padding}>
                    <h1>Contato</h1>
                    <div className={style.cartao}>
                        <div className={style.wpp}>
                            <button onClick={handleClick}>
                                <img src={wpp} className={style.imagem}></img>
                                WhatsApp
                            </button>
                            +55 (11) 9-1578-8274
                        </div>
                        <div className={style.insta}>
                            <button onClick={handleClickInsta}>
                                <img src={insta} className={style.imagem}></img>
                                Instagram
                            </button>
                            @baltigo_engenharia
                        </div>
                        <p>contato@baltigo_engenharia.com.br</p>
                    </div>
                </div>
            </>
        )
    };