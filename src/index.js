import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore, compose } from 'redux';
import rootReducer from './components/reducers/reducers';
import { Provider } from 'react-redux';
import './index.css'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

 

const store = createStore(rootReducer, composeEnhancers())

const app = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))