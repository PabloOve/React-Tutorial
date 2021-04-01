import React from 'react';
import Header from "./components/Header" //asume que estás importando un .js, no hace falta agregar extensión
import MainContent from "./components/MainContent" 
import Footer from "./components/Footer" 
import './components/style.css';


class MyInfo extends React.Component{

  myMethod(){
  }

  render(){
    return (
<div>
<Header /> 
 <MainContent />
 <Footer />
</div>
)
 }   
}

export default MyInfo;
  