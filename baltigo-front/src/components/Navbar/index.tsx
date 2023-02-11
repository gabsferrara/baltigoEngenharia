import BaltigoCinza from '../../assets/img/logos/Baltigo-Cinza.png'
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
      }
    }, [size.width, menuOpen]);
  
    const menuToggleHandler = () => {
      setMenuOpen((p) => !p);
    };
  
    return (
      <header className="header">
        <div className="header__content">
        <Link to='/'><img src={BaltigoCinza}></img></Link>
          <nav
            className={`${"header__content__nav"} 
            ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
            }`}
          >
            <ul>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/Servicos'}>Servicos</Link></li>
                <li><Link to={'/SobreNos'}>Quem somos nós</Link></li>
                <li><Link to={'/Contato'}>Contato</Link></li>
            </ul>
          </nav>
          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    );
  }

  export default Navbar;

