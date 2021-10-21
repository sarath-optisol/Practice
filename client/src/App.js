import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [country,setCountry]=useState("");
  const [position,setPosition]=useState("");
  const [salary,setSalary]=useState(0);
  const [employee,setEmployee]=useState([])
  const add=()=>{console.log(name)
    Axios.post("http://localhost:3001/create",{
      name:name,
      age:age,
      country:country,
      position:position,
      salary:salary})
      .then(()=>{
      setEmployee([...employee,{
        name:name,
        age:age,
        country:country,
        position:position,
        salary:salary
      },
    ]);
    });
  }
 const display=()=>{
  Axios.get("http://localhost:3001/employees").then((response)=>{
    setEmployee(response.data)
  })

 }
  return (<div className="App">
    <div className="info">
    <label>Name:</label>
    <input type="text" onChange={(event)=>{
      setName(event.target.value);
    }} ></input>

    <label>Age:</label>
    <input type="number" onChange={(event)=>{
      setAge(event.target.value);
    }}></input>
 
    <label>Country:</label>
    <input type="text"
    onChange={(event)=>{
      setCountry(event.target.value);
    }}></input>
    
    <label>Position:</label>
    <input type="text" onChange={(event)=>{
      setPosition(event.target.value);
    }}></input>
    
    <label>Salary:</label>
    <input type="number"
    onChange={(event)=>{
      setSalary(event.target.value);
    }}></input>

    <button onClick={add}>Add Information</button>
    <br></br>
    <br></br>
    <button onClick={display}>Show Employees</button>

    {
      employee.map((val,key)=>{
        return (<div>
          <h1>{val.name}</h1>
          
          <h1>{val.age}</h1>
          
          <h1>{val.salary}</h1>
        
          <h1>{val.country}</h1>
         
          <h1>{val.position}</h1>
          <br></br>
          <br></br>
        </div>)
      })
    }
    
    </div>
  </div>);
}

export default App;
