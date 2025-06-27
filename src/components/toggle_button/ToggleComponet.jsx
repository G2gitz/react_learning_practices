import React,{useState} from 'react'

const ToggleComponet = () => {
    const [on,seton] = useState(false);
    function togglebutton(){
        seton(!on)
    };
  return (
    <div>
      <button style={{backgroundColor: on ? 'green' : 'gray',}} onClick={togglebutton}>
        {on ? 'ON':"OFF"}
      </button>
    </div>
  )
}

export default ToggleComponet;
