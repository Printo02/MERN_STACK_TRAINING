import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
const Laptop = (props) => {

  const clickMe=()=>{
    alert("Welcome to React Programming");
  }

  // var company = "HP";
  const[company,setCompany] = useState("abc"); 
  const ChangeValue=()=>{
    //company = "Lenovo";
    setCompany("Lenovo");
    console.log(company);
  }

  const [count,setCount] = useState(0);

  let login = true;

  return (
    <div className="bg-danger-subtle">
      <h2 className="text-primary">Laptop's brand is {props.brand} </h2>
      <Button variant="outline-primary" onClick={clickMe}>Click Me</Button>
      <br/><br/>
      <Button variant="outline-danger" onClick={ChangeValue}>ChangeValue</Button>
      <h2 className="text-primary">Comapany's name is {company} </h2>
      <br/><br/>
      <Button variant="outline-danger" onClick={() => setCount((count) => count + 1)}>Count is: {count}</Button>
      <br/><br/>
      {/* conditional rendering */}
      {login?<h1>Welcome....</h1>:<h1>Please Login....</h1>}
    </div>
  )
}

export default Laptop