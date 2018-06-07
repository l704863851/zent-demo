import React from 'react'
import { Menu, Icon } from 'zent'
const { MenuItem, SubMenu } = Menu

const onClick = (e, key) => {
    console.log(e, key)
}
class MyMenu extends React.Component {
    render() {
        return (
            <Menu mode="inline" onClick={onClick}>
                <SubMenu
                    title={
                        <span>
                            <Icon type="summary" />统计
                        </span>
                    }
                    key="1-1"
                >
                    <MenuItem key="1-1-1">用户分析</MenuItem>
                    <MenuItem key="1-1-2">订单分析</MenuItem>
                </SubMenu>
                <SubMenu
                    title={
                        <span>
                            <Icon type="order" />商品管理
                        </span>
                    }
                    key="1-2"
                >
                    <MenuItem key="1-2-1">卡券管理</MenuItem>
                    <MenuItem key="1-2-2">订单管理</MenuItem>
                    <MenuItem key="1-2-3">商品管理</MenuItem>
                    <MenuItem key="1-2-4">商品页模板</MenuItem>
                </SubMenu>
                <SubMenu
                    title={
                        <span>
                            <Icon type="customer" />角色管理
                        </span>
                    }
                    key="1-3"
                >
                    <MenuItem key="1-3-1">会员管理</MenuItem>
                    <MenuItem key="1-3-2">代理管理</MenuItem>
                    <MenuItem key="1-3-3">供应商管理</MenuItem>
                    <MenuItem key="1-3-4">角色权限管理</MenuItem>
                    <MenuItem key="1-3-5">门店管理</MenuItem>
                </SubMenu>
                <SubMenu
                    title={
                        <span>
                            <Icon type="settings" />设置
                        </span>
                    }
                    key="1-4"
                >
                    <MenuItem key="1-4-1">操作记录</MenuItem>
                    <MenuItem key="1-4-2">系统设置</MenuItem>
                    <MenuItem key="1-4-3">自定义评价</MenuItem>
                </SubMenu>
            </Menu>
        )
    }
}

export default MyMenu
