import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './templates/main/index.jsx';

import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Main />
    </>
)