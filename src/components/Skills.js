import React from 'react'
import "../styles/components/desktop+/skill.scss"


class Skills extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            skills: ["React", "Node.JS", "Sass", "Css", "MongoDB"]
        } 
    }
    render(){

        let skills = this.state.skills;
        let skillsList = skills.map((skill)=><button className="skill-tag">{skill}</button>)

        return (
            <div>
                {skillsList}
            </div>
        )
    }
}

export default Skills