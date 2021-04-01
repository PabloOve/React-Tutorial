import React from 'react';
import ReactDOM from 'react-dom';
import './components/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyInfo from "./MyInfo" //asume que estás importando un .js, no hace falta agregar extensión

ReactDOM.render(<MyInfo />, document.getElementById("root"))

reportWebVitals();
