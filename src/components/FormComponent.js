import React, {Component} from 'react';
import Conditional from './Conditional';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent(props){


return (
  <div class= "todo-list">
   
  <h1>Counter: {props.count}</h1>

  <button type="button" class="btn btn-primary" onClick={props.handleClick}>Increment</button>

  {props.isLoading ? <p>Loading...</p> : <Conditional/>  }

  <p>{props.text}</p>

  <p>Your name is: {props.firstName} {props.lastName}</p>
  
  <form>
  <div class="form-group">
  <label for="exampleInputEmail1">First Name</label>
  <br/>
  <input 
    type = "text"
    value = {props.firstName}
    name = "firstName"
    placeHolder = "Enter your first name"
    onChange = {props.inputChange}      
  />
  </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Last Name</label>
  <br/>
  <input 
    type = "text"
    value = {props.lastName}
    name = "lastName"
    placeHolder = "Enter your last name"
    onChange = {props.inputChange}      
  />
</div>
<br/>

  <label>
    <input 
    type = "checkbox"
    name = "isFriendly"
    checked = {props.isFriendly}
    onChange = {props.inputChange}      
    />
    Check me (uses same method as the checkboxes)
  </label> 
  <br/>

  <label>
   
   <input 
     type = "radio"
     name = "gender"
     value = "male"
     checked = {props.gender == "male"}
     onChange = {props.inputChange}      
     />
     Male
   </label> 

   <br/>

   <label>
   <input 
     type = "radio"
     name = "gender"
     value = "female"
     checked = {props.gender == "female"}
     onChange = {props.inputChange}      
     />
     Female
   </label> 
   <br/> 

   <p>You are a: {props.gender}</p>

   <br/>
   <label for="exampleInputEmail1">Favourite Color</label>

   <select class="form-control" id="exampleFormControlSelect1"> 
  
   value = {props.favColor}  
   onChange = {props.handleChange}
   name = "favColor"
    
    <option value="blue"> Blue </option>
    <option value="green"> Green </option>
    <option value="red"> Red </option>
    <option value="yellow"> Yellow </option>
   </select>
   <br/>
   <label for="exampleInputEmail1">Weekend plans: </label>


  </form>

  {props.items}
  <br/>
   <label for="exampleInputEmail1">Favourite consoles: </label>

  {props.consolesData}
 
  </div>
     
)

}

export default FormComponent;