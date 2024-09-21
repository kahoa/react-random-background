import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    function handleClick(){
        setLogin(!login);
    };

    function changeBackgroundColor(){
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange',];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor); 
    };

    return(
        <div style={{backgroundColor: bgColor}} >
            <input type='text'
            placeholder='Enter your name'
            value={name} onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>{login ? 'Logout' : 'Login'}</button>
            <p className='Greeting-text'>{login ? `Hallo ${name}, Willkommen` : ''}</p>

            <button onClick={changeBackgroundColor}>Change Background Color</button>
        </div>
    );
};

export default App;