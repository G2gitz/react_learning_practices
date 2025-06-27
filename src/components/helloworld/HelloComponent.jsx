import React from 'react'

function HelloComponent(){
    const name = 'Mathan';
    let currentTime = new Date().toLocaleDateString();
    return (
    <>
    <div>
        <h1>
            Hello {name}
        </h1>
        <h2>
            now is {currentTime}
        </h2>
    </div>
    </>
    );
}

export default HelloComponent
