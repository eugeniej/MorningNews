import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Importation for Redux
import myReducer from './reducers/myReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const myStore = createStore(myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ())

ReactDOM.render(

<Provider store={myStore}>

  <App/>

</Provider>


, document.getElementById('root'));


serviceWorker.unregister();
