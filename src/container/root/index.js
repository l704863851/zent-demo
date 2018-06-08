import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import createHistory from "history/createHashHistory"; // 锚点模式的history
import PT from 'prop-types'
import Loadable from 'react-loadable' // 用于代码分割时动态加载模块

import Loading from '../../component/loading'

const Login = Loadable({
    loader: () => import('../login'),
    loading: Loading,
    timeout: 10000,
})

const Home = Loadable({
    loader: () => import('../home'),
    loading: Loading,
    timeout: 10000,
})

// const history = createHistory()

class RootContainer extends React.Component {
    static propTypes = {
        dispatch: PT.func,
        children: PT.any
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    onEnter(Component, props) {
        return <Component {...props} />
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/login" render={props => this.onEnter(Login, props)} />
                    <Route path="/home" render={props => this.onEnter(Home, props)} />
                </Switch>
            </Router>
        )
    }
}

const Root = connect(
    state => ({}),
    dispatch => ({
        actions: bindActionCreators({}, dispatch)
    })
)(RootContainer)

export default Root