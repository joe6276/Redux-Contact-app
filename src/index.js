import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter  as Router} from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './Redux/Reducers/ContactReducer';
import { Provider } from 'react-redux';
  
const store =createStore(contactReducer)

ReactDOM.render(

  <Provider store={store}>
  <Router>
    
    <App />
  
  </Router>
  </Provider>
 ,
  document.getElementById('root')
);

