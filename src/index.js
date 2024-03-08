import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context.js/context';


import App from './App';


import './style.css'


ReactDOM.render(
    <SpeechProvider appId='e0a94005-d50b-45b1-b0fd-d2a576b5cd92' language="en-US">
    <Provider>
        
        <App/>
    </Provider>
    </SpeechProvider>,
 document.getElementById('root'));