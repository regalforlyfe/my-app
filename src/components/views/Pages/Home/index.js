import React, { Component } from 'react';
import './home.css';
import Menu from '../../Menu';
import MenuFooter from '../Footer';
import { Layout, Button, Row, Col } from 'antd';
import { SmileTwoTone, MehTwoTone , HeartTwoTone} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const image1 = require('../../../images/pale.jpeg');
const image2 = require('../../../images/portofolio.PNG');

class Home extends Component {
    state = {
        totalLikes:0
    }

    handleLike = () => {
        this.setState({
                totalLikes: this.state.totalLikes + 1
            })
    }

    handleUnlike = () => {
        if(this.state.totalLikes > 0){
            this.setState({
                totalLikes: this.state.totalLikes - 1
            })
        }
    }

    render(){
        return (
            <div>
                <Layout>
                    <Header style={{background: '#fefbf4', paddingTop:'20px'}}>
                        <Menu></Menu>
                    </Header>
                    <Content style={{background: '#fefbf4'}}>
                        <div className="isi">
                        <Row justify="center" gutter={[32, 16]}>
                            <Col span={6}>
                                <img
                                    src={image2}
                                    alt="Home"
                                    style={{maxWidth: '100%'}}
                                />
                            </Col>
                            <Col span={6}>
                                    <img
                                        src={image1}
                                        alt="Home"
                                        style={{maxWidth: '100%'}}
                                    />
                                    <Row justify="center">
                                        <Col span={11}><p style={{float:"left"}}><strong>AHMAD RIFAL</strong></p></Col>
                                        <Col span={11}><p style={{float:"right"}}><HeartTwoTone twoToneColor="#eb2f96"/><strong> by {this.state.totalLikes}</strong></p></Col>
                                    </Row>
                            </Col>
                            <Col span={6}>
                                <h3 style={{paddingTop:'20px', paddingRight:'120px'}}>
                                    Hola!</h3>
                                <h3>
                                    Perkenalkan nama Saya Ahmad Rifal, kalian bisa panggil Saya Rifal.
                                    Saya sedang berkuliah di UGM jurusan Komputer dan Sistem Informasi.
                                    Salam Kenal ya!
                                </h3>
                                <Row justify="start">
                                    <Col span={4}>
                                    <Button
                                        type="primary" shape="round"
                                        icon={<SmileTwoTone />}
                                        style={{marginTop:'10px', backgroundColor:'white'}}
                                        onClick={this.handleLike}></Button>
                                    </Col>
                                    <Col span={4}>
                                    <Button
                                        type="primary" shape="round"
                                        icon={<MehTwoTone />}
                                        style={{marginTop:'10px', backgroundColor:'white'}}
                                        onClick={this.handleUnlike}></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </div>
                    </Content>
                    <Footer style={{background: '#fefbf4', paddingBottom:'0'}}>
                        <MenuFooter></MenuFooter>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Home;