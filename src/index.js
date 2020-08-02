import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles/global.scss'

const container = document.getElementById('app');

function render(){
    ReactDOM.render(<App />, container);
}

render();

if(module.hot){
    module.hot.accept('./components/app', ()=>{
        render()
    })
}
