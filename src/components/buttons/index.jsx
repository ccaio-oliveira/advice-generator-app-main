import './style.css';

import React from 'react';

const Buttons = ({changeAdvice}) => {

    return(
        <div id="btn">
            <button id="stopBtn"><img src='./images/pattern-divider-mobile.svg' /></button>
            <button id="startBtn" onClick={() => {changeAdvice()}}><img src="./images/icon-dice.svg" /></button>
        </div>
    )
}

export default Buttons;