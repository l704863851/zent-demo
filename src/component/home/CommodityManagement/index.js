import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Breadcrumb, Tabs } from 'zent'
const TabPanel = Tabs.TabPanel

const xx = () => {
    return <div>xx</div>
}
const xxx = () => {
    return <div>xxx</div>
}
const xxxx = () => {
    return <div>xxxx</div>
}

class CommodityManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            activeId: '1'
        }
    }
    onTabChange = id => {
        this.setState({
            activeId: id
        })
    }
    componentDidMount() {
        console.log(this.props)
        let dataList = this.state.dataList.concat(this.props.breadcrumbList)
        dataList.push({
            name: this.props.breadcrumbPushName,
            href: this.props.match.path
        })
        this.setState({
            dataList
        })
    }
    render() {
        const { match, menuActive } = this.props
        return (
            <div className="layout-demo-basic">
                <Breadcrumb breads={this.state.dataList} />
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={
                            <Link to={`${match.path}/${menuActive}/xx`}>
                                选项一
                            </Link>
                        }
                        id="1"
                    />
                    <TabPanel
                        tab={
                            <Link to={`${match.path}/${menuActive}/xxx`}>
                                选项二
                            </Link>
                        }
                        id="2"
                    />
                    <TabPanel
                        tab={
                            <Link to={`${match.path}/${menuActive}/xxxx`}>
                                选项三
                            </Link>
                        }
                        id="3"
                    />
                </Tabs>
                <Route path={`${match.path}/${menuActive}/xx`} component={xx} />
                <Route
                    path={`${match.path}/${menuActive}/xxx`}
                    component={xxx}
                />
                <Route
                    path={`${match.path}/${menuActive}/xxxx`}
                    component={xxxx}
                />
            </div>
        )
    }
}
export default CommodityManagement
