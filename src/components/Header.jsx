import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/component/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="home">


            </div>
            <Link to="/" className="tituloFelipe">
                <h1 className="felipe">FELIPE OLAYA OSPINA</h1>
            </Link>
            <div className="redes">
                <div className="container">
                    <a href="https://twitter.com/Felipeoo1998"><img src="../../public/icon/016-twitter-1.png" alt="Twitter" className="twitter" /></a>
                    <a href="https://www.linkedin.com/in/felipe-olaya-ospina-016b81185/"><img src="../../public/icon/041-linkedin.png" alt="Linkedin" className="linkedin" /></a>
                    <a href="https://github.com/folayao"><img className="git" src="../../public/icon/052-github.png" alt="" /></a>
                    <a href="https://www.instagram.com/felipeolayao/"><img className="insta" src="../../public/icon/044-instagram.png" alt="github's" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header;