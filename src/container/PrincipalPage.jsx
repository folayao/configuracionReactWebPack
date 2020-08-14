import React from 'react'
import { Link } from 'react-router-dom'
/* Components */
/* Style */
import '../assets/styles/container/PrincipalPage.scss'


const PrincipalPage = () => {
    return (
        <div className="ppalPage">

            <div className="container">
                <div className="container__titulo">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>¿Quien soy?</h2>
                </div>
                <div className="container__descripcion">

                    <p className="parrafo_1">
                        Mi nombre como en el título, es Felipe Olaya Ospina.
                        </p>
                    <br />
                    <p className="parrafo_2">
                        Soy un estudiante de ingeniería de sistemas en la universidad Eafit,
                        actualmente estoy suscrito a una plataforma de aprendizaje en linea para
                        mejorar mis skills como programador. Soy músico desde los 8 años y de
                        ahí nace mi creatividad por crear cosas interesantes y atractivas para los usuarios
                        al igual que el sonido de un instrumento que al sonar bien, llama la atención.
                        Este es mi primer deploy que se mantiene en constante actualización, y como muchas cosas
                        que hago me gusta compartir código para la comunidad, generalmente tengo mucho contenido privado,
                        pero he estado interesado en compartir dentro de mis repositorios varios proyectos pequeños para que las
                        personas puedan iniciar a crear sus propias paginas!
                        </p>
                    <p className="parrafo_3">
                        Un saludo y disfruta! :D
                        </p>
                </div>
            </div>
            <div className="imagenMedellin">
                <img src="../../public/images/rackmounted-servers-in-a-datacenter-picture-id183784572-ed-1024x629.jpg" alt="" />
            </div>
            <section className="mas_sobremi">
                <div className="img">
                    <img src="../../public/images/18274707_1402916283085250_5026574748011313453_n.jpg" alt="" />
                </div>
                <p>
                    “Si la depuración es el proceso de eliminar errores, entonces la programación debe ser el proceso de introducirlos” - Edsger Dijkstra
                </p>
            </section>
      


    
        </ div>
    );
}

export default PrincipalPage;