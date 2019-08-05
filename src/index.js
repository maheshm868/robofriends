import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App.js';
import 'tachyons';
import './index.css'

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
