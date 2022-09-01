import './style.css';

import React from 'react';

const Buttons = ({changeAdvice}) => {
    let random;

    const start = () => {
        clearInterval(random);
        random = setInterval(() => {
            changeAdvice();
        }, 300);
    }

    function stop(){ clearInterval(random) };

    return(
        <div id="btn">
            <button id="stopBtn" onClick={() => {stop()}}><img src="./images/pattern-divider-desktop.svg" /></button>
            <button id="startBtn" onClick={() => {start()}}><img src="./images/icon-dice.svg" /></button>
        </div>
    )
}

export default Buttons;