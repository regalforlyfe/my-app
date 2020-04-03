import React, { Component } from 'react';
import './album.css';
import Menu from '../../Menu';
import MenuFooter from '../Footer'
import { Layout,Card, Col, Row, notification, Button} from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

const openNotification = () => {
    notification.open({
      message: 'Hai!',
      description:
        'Remember this. You carry so much love in your heart, Dont forget to give some to yourself!',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

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

class Album extends Component {
    render(){
        return(
            <div>
                <div>
                <Layout>
                    <Header style={{background: '#fefbf4', paddingTop:'20px'}}>
                        <Menu></Menu>
                    </Header>
                    <Content style={{background: '#fefbf4'}}> 
                        <div className="contain2">
                            <div className="poem">
                            <p><strong>the essence.</strong></p>
                            <hr></hr>
                            <p>sweetheart</p>
                            <p>you're star</p>
                            <p>never apologize</p>
                            <p>for burning too bright</p>
                            </div>
                        </div>
                        <Row justify="center">
                        <Button shape="round" type="primary" style={{backgroundColor:'white'}} onClick={openNotification}>
                            <SmileOutlined style={{ color: '#108ee9' }} />
                        </Button>
                        </Row>
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

export default Album;