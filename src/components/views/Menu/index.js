import React, { Component } from 'react';
import './menu.css';
import { Menu } from 'antd';
import { Row } from 'antd';
import { HomeFilled, IdcardFilled, HeartFilled, GithubFilled, InstagramFilled, TwitterCircleFilled,
    LinkedinFilled
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
    render(){
        return(
            <Row justify="center">
            <Menu mode="horizontal" style={{background: '#fefbf4'}}>
                <Menu.Item key="home">
                    <HomeFilled />
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <IdcardFilled />
                    <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    <HeartFilled />
                    Social Media
                    </span>
                }
                >
                    <Menu.Item key="sosmed1">
                        <InstagramFilled />
                        <a href="https://www.instagram.com/rifalahmd2/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </Menu.Item>
                    <Menu.Item key="sosmed2">
                        <TwitterCircleFilled/>
                        <a href="https://twitter.com/trafadlaw_" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </Menu.Item>
                    <Menu.Item key="sosmed3">
                        <LinkedinFilled/>
                        <a href="https://www.linkedin.com/in/ahmad-rifal-320b3b115/" target="_blank" rel="noopener noreferrer">
                            linkedin
                        </a>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="github">
                    <GithubFilled />
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Github Repository
                    </a>
                </Menu.Item>
            </Menu>
            </Row>
        );
    }
}

export default Navbar;