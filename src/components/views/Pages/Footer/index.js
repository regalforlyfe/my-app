import React, { Component } from 'react';
import './footer.css';
import {Row} from 'antd';

class Footer extends Component{
    render(){
        return(
            <div className="foot">
                <Row justify="center">
                    <h5 style={{paddingTop:"10px"}}>Portofolio ©2020 Created by Ahmad Rifal</h5>
                </Row>
            </div>
        );
    }
}

export default Footer;