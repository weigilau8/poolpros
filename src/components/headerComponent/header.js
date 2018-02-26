import React, { Component } from 'react';


import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="barTop">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} mdOffset={6} sm={12}>
                                <ul className="nav navbar-nav">
                                    <li><a href="/dealers">Dealers and Distributors</a></li>
                                    <li><a href="/commercial">Commercial Service</a></li>
                                    <li><a href="/"><span className="fa fa-share-square-o"></span></a></li>
                                </ul>
                            </Col>
                        </Row>
                        <hr />
                    </Grid>
                </div>

                <nav className="navbar">

                    <div className="container">
                        
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="fa fa-reorder"></span>
                                
                            </button>
                            <a className="navbar-brand" href="/">
                                <img src="images/pool-pros-logo.png" alt="POOL PROS" />
                            </a>
                        </div>
                        <div className="navbar-right find">
                            <button ><span className="fa fa-map-marker" /> Find a Pool Pro</button>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="/pools">Pools & Spas</a></li>
                                <li><a href="/supplies">Supplies</a></li>
                                <li><a href="/resources">Resources</a></li>
                                <li><a href="/services">Services</a></li>
                                <li></li>
                            </ul>
                        
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
