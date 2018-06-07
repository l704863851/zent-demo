/** Loading组件 用于按需加载时过渡显示等 **/
import React from 'react'
import './index.scss'
import ImgLoading from '../../assets/loading.gif'
export default class Footer extends React.PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)
        this.state = {}
    }

    makeType(p) {
        let msg
        if (p.error) {
            msg = '加载出错，请刷新页面'
        } else if (p.timedOut) {
            msg = '加载超时'
        } else if (p.pastDelay) {
            msg = '加载中…'
        }
        return msg
    }

    render() {
        return (
            <div className="loading">
                <img src={ImgLoading} alt="" />
                <div>{this.makeType(this.props)}</div>
            </div>
        )
    }
}
