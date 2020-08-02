import React from 'react'
import {Link} from 'react-router-dom'
import Alfredo from '../images/alfredo.jpg'
import "../styles/components/desktop+/list-proyects.scss"

class ListProyects extends React.Component{
    render(){
        return(
            <Link to={`/proyects/${this.props.data.id}`} className="list__container__items" key="id={this.props.data.id}">
                <h3>{this.props.data.name}</h3>
                <span>{this.props.data.description}</span>
                <img src={Alfredo} ></img>
            </Link>
        )
    }
}

export default ListProyects;