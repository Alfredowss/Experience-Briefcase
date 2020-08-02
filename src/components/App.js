import React from 'react'
import Layout from './Layout'
import Proyects from '../pages/Proyects'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Proyect from '../pages/Proyect'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Proyects}/>
                        <Route  exact path="/profile" component={Profile}/>    
                        <Route  exact path ="/proyects/:id" component={Proyect}/>
                        <Route  component={NotFound}/>
                    </Switch>            
                </Layout>
            </BrowserRouter>    
        )
    }
}


export default App