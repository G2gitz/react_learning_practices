import React from 'react'
import './Usercomponent.css';


function UsercardComponent (props)  {
  return (
    <div id = "carddiv">
      <h1>Name: {props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h3>Role:{props.role}</h3>
    </div>
  )
}

export default UsercardComponent;
