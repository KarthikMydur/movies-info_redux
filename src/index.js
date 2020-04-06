import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configStore from './store/configStore'
const store = configStore()

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))