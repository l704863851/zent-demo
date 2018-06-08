import React from 'react'
import MyMenu from './MyMenu'
import { Route, Switch } from 'react-router-dom'
import CommodityManagement from './CommodityManagement'
import NoFind from '../nofind'

import { Layout } from 'zent'
const { Row, Col } = Layout

const inlineStyles = {
    rowFlex: {
        display: 'flex'
    },
    colMenu: {},
    colArticle: {
        flex: '1'
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: [
                {
                    title: '统计',
                    key: '1-1',
                    children: [
                        { key: '1', title: '用户分析', component: NoFind },
                        { key: '2', title: '订单分析', component: NoFind }
                    ],
                    icon: 'summary'
                },
                {
                    title: '商品管理',
                    key: '1-2',
                    children: [
                        { key: '1', title: '卡券管理', component: NoFind },
                        { key: '2', title: '订单管理', component: NoFind },
                        {
                            key: '3',
                            title: '商品管理',
                            component: CommodityManagement
                        },
                        { key: '4', title: '商品页模板', component: NoFind }
                    ],
                    icon: 'order'
                },
                {
                    title: '角色管理',
                    key: '1-3',
                    children: [
                        { key: '1', title: '会员管理', component: NoFind },
                        { key: '2', title: '代理管理', component: NoFind },
                        { key: '3', title: '供应商管理', component: NoFind },
                        { key: '4', title: '角色权限管理', component: NoFind },
                        { key: '5', title: '门店管理', component: NoFind }
                    ],
                    icon: 'customer'
                },
                {
                    title: '设置',
                    key: '1-4',
                    children: [
                        { key: '1', title: '操作记录', component: NoFind },
                        { key: '2', title: '系统设置', component: NoFind },
                        { key: '3', title: '自定义评价', component: NoFind }
                    ],
                    icon: 'settings'
                }
            ],
            breadcrumbList: [{ name: '首页', href: this.props.match.path }]
        }
    }
    render() {
        const { match } = this.props
        return (
            <Row style={inlineStyles.rowFlex}>
                <Col style={inlineStyles.colMenu}>
                    <MyMenu
                        match={this.props.match}
                        menuList={this.state.menuList}
                    />
                </Col>
                <Col style={inlineStyles.colArticle}>
                    <Switch>
                        {this.state.menuList.map((item, index) => {
                            return item.children.length > 0 ? (
                                item.children.map((itemChild, indexChild) => {
                                    return (
                                        <Route
                                            path={`${match.path}/${item.key}-${
                                                itemChild.key
                                            }`}
                                            render={props => (
                                                <itemChild.component
                                                    {...props}
                                                    breadcrumbList={
                                                        this.state
                                                            .breadcrumbList
                                                    }
                                                    breadcrumbPushName={
                                                        itemChild.title
                                                    }
                                                />
                                            )}
                                        />
                                    )
                                })
                            ) : (
                                <Route
                                    to={`${match.path}/${item.key}`}
                                    component={item.component}
                                />
                            )
                        })}
                    </Switch>
                </Col>
            </Row>
        )
    }
}

export default Home
