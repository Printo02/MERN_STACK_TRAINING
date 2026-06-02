import React from 'react'
import Button from 'react-bootstrap/Button';

const Laptop = (props) => {
  return (
    <div className="bg-danger-subtle">
      <h2 className="text-primary">Laptop's brand is {props.brand} </h2>
      <Button variant="dark">Dark</Button>
      </div>


  )
}

export default Laptop