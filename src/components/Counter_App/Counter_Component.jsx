import React, { useState } from 'react'

const Counter_Component = () => {

    const [count,setcount] = useState(0);
  return (
    <div>
      <h1 >{count}</h1>
      <button type="button" onClick={ () =>
        setcount( count+ 1)
      }>
        Click here
      </button>
    </div>
  )
}

export default Counter_Component;
