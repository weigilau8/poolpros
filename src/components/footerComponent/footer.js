import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid>
                    <Row className="show-grid paneling">
                        <Col sm={4} smOffset={4}>
                            <img responsive src="images/pool-pros-logo-footer.png" alt="POOL PROS"  />
                            <Row className="footerText">
                                <Col sm={6} xs={6}>
                                    <p>CONNECT WITH US</p>
                                    
                                </Col>
                                <Col sm={6} xs={6}>
                                    <p><a href=""><span className="fa fa-twitter"/></a></p>
                                    <p><a href=""><span className="fa fa-facebook"/></a></p>
                                    <p><a href=""><span className="fa fa-youtube"/></a></p>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
