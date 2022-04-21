import React from "react";
import Hoby from "./Hoby";


function Person(props){
    console.log(props)
    let {name,clas} = props
    return (
        <div>
            {/* Hi I am person {props.name} and i belong to {props.class} */}

        
          <h2>
          My  {name } is  <span className="ag">{clas}</span> years old
          <Hoby data = "Playing Criket " name = {name}  age = "22"/>
          </h2>
        </div>
    )
}

export default Person;