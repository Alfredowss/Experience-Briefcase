import React from 'react'
import '../styles/pages/desktop+/proyects.scss'
import ListProyects from '../components/ListProyects'

class Proyects extends React.Component{
    state = {
        data: [{name: 'React.JS Proyect', id: "kjhasgggkjhskj", description: "This is a proyect thinked in ..."}, {name:"MongoDB Proyect", id: "kjhasfffffkjhs", description: "This is a proyect thinked in ..."}, {name: "Node.js API Proyect", id: "uoisuois", description: "This is a proyect thinked in ..."}, {name: "Sockets Node.js Proyect", id:"kjshkjsh", description: "This is a proyect thinked in ..."}, {name: 'React.JS Proyect', id: "kjhasgggkjhskj", description: "This is a proyect thinked in ..."}, {name:"MongoDB Proyect", id: "kjhasfffffkjhs", description: "This is a proyect thinked in ..."}, {name: "Node.js API Proyect", id: "uoisuois", description: "This is a proyect thinked in ..."}, {name: "Sockets Node.js Proyect", id:"kjshkjsh", description: "This is a proyect thinked in ..."}]
    }
    render(){
        return(
            <div className="proyects__layout">
                <div className="proyects__hero">
                    <div>Proyectos<span className="written">&nbsp;</span></div>
                </div>
                <div className="proyects__side">

                </div>
                <div className="proyects__list">
                    <div className="proyects__list__skills">
                        <select className="list__button-skills">
                            <option value=""> React.JS </option>
                            <option value=""> Mysql </option>
                            <option value=""> MongoDB </option>
                            <option value=""> HTML </option>
                            <option value=""> CSS </option>
                            <option value=""> Sass </option>
                        </select>
                    </div>
                    <div className="list__container">
                        <ul className="list__container__ul">
                            {this.state.data.map((data)=>{
                                return (
                                    <ListProyects data={data}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proyects