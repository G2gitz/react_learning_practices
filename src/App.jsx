import React from 'react'
import HelloComponent from './components/helloworld/HelloComponent'
import UsercardComponent from './components/usercard/UsercardComponent'
import Counter_Component from './components/Counter_App/Counter_Component'
import ToggleComponet from './components/toggle_button/ToggleComponet'
import Form_component from './components/input_handling/Form_component'

const App = () => {
  return (
    <div>
      {/* <HelloComponent /> */} 
      {/* <UsercardComponent name = "Mathan" email="test@gmail.com" role = "Developer"/>
      <UsercardComponent name = "G2Editz" email="test@gmail.com" role = "Editor"/>
      <UsercardComponent name = "Mathan" email="test@gmail.com" role = "Developer"/> */}

      {/* <Counter_Component /> */}

      {/* <ToggleComponet/> */}
      <Form_component/>

    </div>
  )
}

export default App
