import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import { Menu, Icon } from 'zent'
const { MenuItem, SubMenu } = Menu

class MyMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onClick = (e, key) => {
        console.log(e, key)
    }
    render() {
        const { match } = this.props
        return (
            <Menu mode="inline" onClick={this.onClick}>
                {this.props.menuList.map((item, index) => {
                    return (
                        <SubMenu
                            key={item.key}
                            title={
                                <span>
                                    <Icon type={item.icon} />
                                    {item.title}
                                </span>
                            }
                        >
                            {item.children.map((itemChild, indexChild) => {
                                return (
                                    <MenuItem
                                        key={`${match.path}/${item.key}-${
                                            itemChild.key
                                        }`}
                                    >
                                        <Link
                                            to={`${match.path}/${item.key}-${
                                                itemChild.key
                                            }`}
                                        >
                                            {itemChild.title}
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </SubMenu>
                    )
                })}
            </Menu>
        )
    }
}

export default MyMenu
