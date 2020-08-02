import React from 'react'

import '../styles/pages/desktop+/proyect.scss'

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
                    <span className="proyect__header__image"></span>
                </div>
            </div>
        </div>
    )
}

export default Proyect