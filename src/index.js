import React from 'react';
import ReactDOM from 'react-dom';
import './colores.css';
import './index.css';
import './Nav.css';
import './Header.css';
import './Footer.css';
import './App.css';
import App from './App';
import Buscador from './elements/js/Buscador.js';
import './elements/css/Buscador.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
