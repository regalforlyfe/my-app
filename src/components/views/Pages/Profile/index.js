import React, { Component } from 'react';
import './profile.css';
import Menu from '../../Menu';
import MenuFooter from '../Footer'
import { Layout, Carousel,Card, Col, Row } from 'antd';

const { Header, Footer, Content } = Layout;
const card = [
    {
        title : "City of Stars",
        image : require('../../../images/photo1.jpg'),
    },
    {
        title : "Malibu Night",
        image : require('../../../images/photo3.jpg'),
    },
    {
        title : "Pasar Senen",
        image : require('../../../images/photo4.jpg'),
    },
    {
        title : "Chingu Cafe vers 1",
        image : require('../../../images/photo2.jpg'),
    },
    {
        title : "Chingu Cafe vers 2",
        image : require('../../../images/photo5.jpg'),
    },
    {
        title : "Chingu Cafe vers 3",
        image : require('../../../images/photo6.jpg'),
    },
];

class Profile extends Component {
    render(){
        return(
            <div>
                <div>
                <Layout>
                    <Header style={{background: '#fefbf4', paddingTop:'20px'}}>
                        <Menu></Menu>
                    </Header>
                    <Content style={{background: '#fefbf4'}}>
                        {/* <div className="contain">
                            <Carousel autoplay>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                            </Carousel>
                        </div> */}
                        <div className="site-card-wrapper">
                            <Row gutter={[32, 16]}>
                            {card.map (data=>
                            <Col span={8}>
                                <Card hoverable title={data.title} bordered={false}>
                                <img
                                    src={data.image}
                                    alt="Home"
                                    style={{maxWidth: '100%'}}
                                />
                                </Card>
                            </Col>
                            )}
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{background: '#fefbf4'}}>
                        <MenuFooter></MenuFooter>
                    </Footer>
                </Layout>
            </div>
            </div>
        );
    }
}

export default Profile;