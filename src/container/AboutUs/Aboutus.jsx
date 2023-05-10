import React from "react";

import a from '../../assets/images/a.png'
import pin from '../../assets/images/pin.png'

import './Aboutus.css'

function About() {

    return (
        <div className="aboutus app__bg flex__center section__padding" id="about">
            
            <div className="aboutus-overlay flex__center">
                <img src={a} alt="a letter" />
            </div>

            <div className="aboutus-content flex__center">
                <div className="aboutus-content_about">
                    <h1 className="headtext__poppins">About us</h1>
                    <p className="p__opensans">Este proyecto fue hecho por un grupo de estudiantes de 6to aficionados a la tecnología, a la programación y a las ciencias sociales. Somos un grupo con ganas de mejorar la forma de enseñar, que desde un punto de vista de estudiantes, es deficiente y bastante aburrida.</p>
                </div>

                <div className="aboutus-content_pin flex__center">
                    <img src={pin} alt="about_pin" />
                </div>

                <div className="aboutus-content_history">
                    <h1 className="headtext__poppins">Our Mission</h1>
                    <p className="p__opensans">Nuestros objetivos no son muy claros, pero si tenemos en claro el potencial de este proyecto. La misión de este es simplemente ayudar a esos profesores a cumplir con el programa de una manera mas dinámica y divertida para los estudiantes. Que muchas veces se ven agobiados y estresados por metodos obsoletos de enseñanza.</p>
                </div>
            </div>

        </div>
    )
}

export default About