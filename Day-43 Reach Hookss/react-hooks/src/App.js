import logo from './logo.svg';
import './App.css';
import Card from './componets/Card';
import {useState} from 'react'
import Navbar from './componets/Navbar';
function App() {

  //holding the state of the varible
  const [value,setValue] = useState(0);
  // let value = 0;
  const updateValue = ()=>{
    console.log("hello")
    // value = value +1
    console.log(value)
    setValue(value+1)

  }
  const updateValueBy5 = ()=>{
  
    // value = value +1
    console.log(value)
    setValue(value+5)

  }
  return (
   <div>
     <Navbar/>
      <h1>Hello World</h1>
      <h3> REact counter {value}</h3>
      <Card title="Learning react" src = "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg"/>
      <button onClick={updateValue} > Add +</button>
      <button onClick={updateValueBy5} > Add + 5</button>
      <button onClick={()=> setValue(value-5)} > sub - 5</button>

      {/* <Card title = "Learn Python" src="https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg" /> */}
      {/* <Card title = "Learn Java" src="https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg" /> */}
      {/* <Card title = "Learn Web"  src="https://img-c.udemycdn.com/course/240x135/2795746_62d5.jpg" /> */}
    
      
   </div>
  );
}

export default App;
