import React, {Component} from 'react';
import { PropTypes } from 'react';
import consoleData from './ConsoleData';
import itemData from './TodoItemData';
import FormComponent from './FormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainContent extends Component{

  constructor(){
    super()

    this.state = {
      consoles: consoleData,
      items: itemData,
      count: 0,
      isLoading: false,
      character: {},
      firstName: "",
      lastName: "",
      isFriendly: false,
      favColor: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputChange = this.inputChange.bind(this)      
  }

  inputChange(event)  {
    event.target.type == "checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({[event.target.name]: event.target.value}) 
  }

  handleClick()  {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleChange(id){
    
    this.setState( prevState => {
 
      const updatedTodos = prevState.items.map(item => {
        if (item.id == id){
          item.completed = !item.completed
        }
        return item                    
    })
     return {
      items: updatedTodos
    }

  
})
}

componentDidMount(){

  this.setState({
    isLoading: true
  });

  fetch("https://swapi.dev/api/people/1/")
  .then(response => response.json())
  .then(data => {
    
    this.setState({
      isLoading: false,
      character: data
    });
  }
    )
  
}


    render() { 

      const consolesData = this.state.consoles.map(console => <Console key = {console.id} 
        console = {console}  
        />)
    
        const items = this.state.items.map(item => <TodoItem key = {item.id} 
          item = {item} handleChange ={this.handleChange}
          />)
    
        const text = this.state.loading ? "Loading...." : "API call: " + this.state.character.name

        return (
         
      <main>
    
        <FormComponent
         handleChange ={this.handleChange}
         handleClick ={this.handleClick}
         inputChange ={this.inputChange}
         {...this.state}
         text = {text}
         items = {items}
         consolesData = {consolesData}

       />
        
        </main>
)
      
  }
}

  class Console extends Component { 
    
    render() { 
      return (  
        <div class="card" style={{width: "18rem;"}}>
        <img class="card-img-top" src={this.props.console.imgUrl} alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">{this.props.console.consoleName}</h5>
        <p class="card-text">{this.props.console.description}</p>
        <p style = {{display: !this.props.console.lastYear && "none"}}>Last Year: {this.props.console.lastYear}</p>
        </div>
        </div>
      )  
  }
    }

    class TodoItem extends Component{ 

      change = () => {
        this.props.handleChange(this.props.item.id);        
        };

      render() { 
      return (
          <div className= "todo-item">
           
          <input type = "checkbox" checked ={this.props.item.completed}
          onClick = {this.change}/>  
          <p style = {this.props.item.completed ? {fontStyle: "italic", color: "·cdcdcd", textDecoration: "line-through" } : null }>{this.props.item.description}</p>
          </div>
      )
      }

    }
    

export default MainContent;
