import React from 'react';


function Header(){ 
  const name ="Pablo"
  const surname = "Ovejero"

    return (
      <p class ="p3 mb-2 bg-light ">
      <p class ="text-center"> 
      <p class ="h1">  {name + " " + surname}  </p>    
      </p>
      </p>
      
    )
  }

export default Header;
