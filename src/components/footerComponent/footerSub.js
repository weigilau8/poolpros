import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class FooterSub extends Component {
    render() {
        return (
            <div className="footerSub text-center">
                <Grid>
                    <Row className="show-grid paneling">
                        <Col sm={6} smOffset={3}>
                            <Row>
                                <Col sm={12}>
                                    <p>
                                        &copy; 2017 Pool Pros
                                    </p>
                                    <p>
                                        <a href="">Privacy Policy</a> 
                                    </p>
                                    <p>
                                        <a href="">Terms and Conditions</a> 
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default FooterSub;
