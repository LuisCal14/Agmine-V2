import React from "react";
import earth from '../../assets/images/earth.png'
import { Link } from 'react-router-dom'
import SubHeader from "../../components/SubHeader/Subheader";
import './Header.css'

function Header(){
    return (
        <div className="header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <h1 className="header-h1">Agmine</h1>
                <p className="p__opensans" style={{margin: '0.5rem 0 2rem 0'}}>  
                    Bienvenidos a Agmine, una aplicación que tiene como meta ayudar a esos profesores de geografía a mejorar su forma de enseñar, haciendo de sus clases un momento más chill y divertido para los estudiantes. Es hora de aprender!
                </p>
                <button type="button" className="custom__button">
                    <Link to='/games'>
                        Explore Games
                    </Link>
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={earth} alt="welcome" />
            </div>
        </div>
    )

}

export default Header