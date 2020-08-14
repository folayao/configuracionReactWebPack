import React from 'react'
import '../assets/styles/component/Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <h2 > Felipe Olaya Ospina®</h2>
            <p className="p1">UNIVERSIDAD EAFIT</p>
            <p className="p2">PLATZI</p>
    
            <div className="flaticon">
                <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
                <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
            </div>

        </div>
    );
}

export default Footer;