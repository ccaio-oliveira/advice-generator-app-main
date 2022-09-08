import React, { useState } from "react";
import Title from "../../components/title";
import Advice from "../../components/advice";
import Buttons from "../../components/buttons";

import './style.css';

const Main = () => {
    const [adv, setAdv] = useState('Click on button to see an advice!');
    const [id, setId] = useState(0);
    
    const loadAdvices = async () => {
        const advicesResponse = await fetch('https://api.adviceslip.com/advice').then();
        const adv = await advicesResponse.json();
        const advice = adv.slip;

        setAdv(advice.advice);
        setId(advice.id)
    }

    return(
        <div id="card">
            <Title id={id} />
            <Advice advice={adv} />
            <Buttons changeAdvice={loadAdvices}/>
        </div>
    )
}

export default Main;