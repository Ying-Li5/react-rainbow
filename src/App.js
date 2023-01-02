import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })
    
    const addColor = (newColor) => {
        setColors([
            'violet', 'blue',
            'lightblue', 'green',
            'greenyellow', 'yellow',
            'orange', 'red', 
            newColor])
    }

    return (
        <div className="App">
            <div>
                {colors.map((color, i) => 
                    <ColorBlock key={i} color={color} />
                )}
            </div>
            <div>
                <ColorForm addColor={addColor} />
            </div>
        </div>
    )
}

export default App;