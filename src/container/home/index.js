import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from '../../component/home'

const home = connect(
    state => ({}),
    dispatch => ({
        active: bindActionCreators({}, dispatch)
    })
)(Home)

export default home
