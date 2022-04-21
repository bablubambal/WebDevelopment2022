import logo from './logo.svg';
import './App.css';
import './index.css';
import Person from './Components/Person';

function App() {
  let data = {
    "name": "John",
    "age":25
  }

  return (
   <div>
     Hello React


     <Person name = "Rohan" clas = "3rd"  data = {data}/>
     <Person name = "Mohan" clas = "6th"/>
     <Person  clas="4th" name = "Raju"/>
     <Person name = "Ram" clas = "5th"/>

   </div>
  );
}

export default App;
