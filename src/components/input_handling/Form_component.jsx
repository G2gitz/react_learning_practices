import React from 'react'
import './Form_component.css'
const Form_component = () => {
    function showdetails(){
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
            alert(`Name: ${name}\nPassword: ${password}\nEmail: ${email}`);
    }
  return (
    <div>
     <input type="text" name="name" id="name" />
      <input type="password" name="password" id="password" />
      <input type="email" name="email" id="email" />
      <button type="button" onClick={showdetails}>okay</button>

    </div>
  )
}

export default Form_component;
