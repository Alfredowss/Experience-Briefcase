import React from 'react'
import Skills from '../components/Skills'
import '../styles/pages/desktop+/proyect.scss'
import randomImage from '../images/fondo .jpg';

function Proyect(props){
    return  (
        <div className="proyect__container">
            <div className="proyect__header__container">
                <div className="proyect__header__description">
                    <h1>Rest API</h1>
                    <span>
                        Api Rest que implementa un CRUD en Node.js y mysql, integrado
                        a un frontend escrito en React.js. El proyecto une estudiante y alumnos. Proporcionandoles 
                        un chat en tiempo real, así como la capacidad de hacer vdeollamadas
                    </span>
                    <button>Go</button> <button>Repositorio</button>
                </div>
                <div className="proyect__header__imagecontainer">
                    <span className="proyect__header__image">
                        <h4>Skills</h4>
                        <Skills />
                    </span>
                </div>
            </div>
            <div className="proyect__badge__container">
                <div><img src={randomImage} width="350px"></img></div>
                <div>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    )
}

export default Proyect