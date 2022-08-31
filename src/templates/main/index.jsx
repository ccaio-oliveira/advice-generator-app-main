import React, { useState } from "react";
import './style.css';

const Main = () => {
    const [adv, setAdv] = useState('oioi');
    const [id, setId] = useState(0);

    console.log('render...');
    
    const loadAdvices = async () => {
        const advicesResponse = await fetch('https://api.adviceslip.com/advice').then();
        const adv = await advicesResponse.json();
        const advice = adv.slip;

        setAdv(advice.advice);
        setId(advice.id)
    }

    return(
        <div id="card">
            <p>#{id !== 0 && (id)}{adv}</p>
            <button onClick={() => loadAdvices()}>mude o conselho</button>
        </div>
    )
}

export default Main;