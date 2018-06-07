import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/index.css'
import Root from './container/root/index'
import store from './store'

import 'zent/css/index.css'

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
)
