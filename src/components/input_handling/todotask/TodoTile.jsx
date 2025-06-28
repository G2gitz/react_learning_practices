import React, { useState } from 'react';

function TodoTile(props) {
  const { key,task } = props;
  const [isCompleted, setToggle] = useState(false);

  function toggleComplete() {
    setToggle(!isCompleted);
  }

  return (
    <div
      style={{
        height: '80px',
        width: '550px',
        border: '2px solid black',
        borderRadius: '10px',
        padding: '0px',
        // boxSizing: 'border-box',
        backgroundColor: 'white', 
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: '15px', 
      }}
    >

      <h3
        style={{
          color: 'black',
          textDecoration: isCompleted ? 'line-through' : 'none',
          margin: 0, // removes default h3 spacing
        }}
      >
        {key }{task}
      </h3>
            <input
        type="checkbox"
        checked={isCompleted}
        onChange={toggleComplete}
      />
    </div>
  );
}

export default TodoTile;
