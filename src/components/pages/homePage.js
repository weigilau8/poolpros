import React, { Component } from 'react';

import { Media } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import Modal from "react-responsive-modal";
import Modaled from '../modalComponent/modaled';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import data from '../../dealers.json';

console.log(data);

class Homepage extends Component {

    state = {
        open: false,
      };
    
      onOpenModal = () => {
          this.setState({ open: true });
      };
    
      onCloseModal = () => {
          this.setState({ open: false });
      };

    render() {
        const { open } = this.state;
        const BUTTONS = ['Filter Results'];
        function renderDropdownButton(title, i) {
            
            return (
                <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`} >
                    <MenuItem eventKey="1">
                        <FormGroup>
                            <Checkbox inline className="deals" checked>
                                <span className="check"></span> Service
                            </Checkbox>
                        </FormGroup>
                    </MenuItem>
                    <MenuItem >
                        <FormGroup>
                            <Checkbox inline className="deals">
                                <span className="check"></span> Installation
                            </Checkbox>
                        </FormGroup>
                    </MenuItem>
                    <MenuItem eventKey="3">
                        <FormGroup>
                            <Checkbox inline className="deals">
                                <span className="check"></span> Residential
                            </Checkbox>
                        </FormGroup>
                    </MenuItem>
                    <MenuItem eventKey="4">
                        <FormGroup>
                            <Checkbox inline className="deals">
                                <span className="check"></span> Commercial <Button bsSize="xsmall" className="question">&nbsp;?&nbsp;</Button>
                            </Checkbox>
                        </FormGroup>
                    </MenuItem>
                </SplitButton>
            );
        }

        const buttonsInstance = (
            <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        );
        
        return (
            <div id="mainHomePage">
                <div className="container finding">

                    <Well>
                        <Grid>
                            <Row className="deal">
                                <Col md={3} sm={6} xs={6} className="dealers">
                                    <h4 className="text-right">7 dealers in 28226</h4>
                                </Col>
                                <Col md={2} sm={6} xs={6} className="findFilter">
                                    <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
                                </Col>
                                <Col md={6} sm={12} xs={12} className="filterDown">
                                    <Row>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Checkbox inline className="deals" checked>
                                                    <span className="check"></span> Service
                                                </Checkbox>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Checkbox inline className="deals">
                                                    <span className="check"></span> Installation
                                                </Checkbox>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Checkbox inline className="deals">
                                                    <span className="check"></span> Residential
                                                </Checkbox>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Checkbox inline className="deals">
                                                    <span className="check"></span> Commercial
                                                </Checkbox>
                                                
                                            </FormGroup>
                                        </Col>
                                        <Col md={1}>
                                            <Button bsSize="xsmall" className="question">&nbsp;?&nbsp;</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Well>
                    
                </div>

                <Grid>
                    <Row className="show-grid paneling">

                        
                        <Col md={4} sm={4}>
                            <Panel >
                                <Panel.Body>
                                    
                                    <Media>
                                        <Media.Body>
                                            <Media.Heading>Aqua Experts</Media.Heading>

                                            <h3 className="mediaNumber"><span className="fa fa-phone"/> <span className="tap"/> 1.888.888.8888</h3>
                                            
                                            <p className="mediaSubHeading">Can’t talk now? Click below to send an email.</p>
                                            
                                            <ButtonToolbar className="theCenterFlex">
                                                <Button  onClick={this.onOpenModal}><span className="fa fa-envelope" /> Contact this Pro</Button>
                                            </ButtonToolbar>

                                            <h5>Business Hours</h5>
                                            <p>Weekdays 7:00am - 7:00pm</p>
                                            <p>Saturdays 7:00am - 3:00pm</p>
                                            <p>Sundays - CLOSED</p>
                                        </Media.Body>
                                    </Media>
                                </Panel.Body>
                                <Panel.Footer>
                                    <Row>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-star"></span> Installaion Pro 
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-gear"></span> Service Pro
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-home"></span> Residential Pro 
                                        </Col>
                                    </Row>
                                    
                                </Panel.Footer>
                            </Panel>
                        </Col>
                        <Col md={4} sm={4}>
                            <Panel >
                                <Panel.Body>
                                    
                                    <Media>
                                        <Media.Body>
                                            <Media.Heading>Premium Pools & Spas of Charlotte</Media.Heading>

                                            <h3 className="mediaNumber"><span className="fa fa-phone"/> <span className="tap"/> 1.888.888.8888</h3>
                                            
                                            <p className="mediaSubHeading">Can’t talk now? Click below to send an email.</p>
                                            
                                            <ButtonToolbar className="theCenterFlex">
                                                <Button onClick={this.onOpenModal}><span className="fa fa-envelope" /> Contact this Pro</Button>
                                            </ButtonToolbar>

                                            <h5>Business Hours</h5>
                                            <p>Weekdays 7:00am - 7:00pm</p>
                                            <p>Saturdays 7:00am - 3:00pm</p>
                                            <p>Sundays - CLOSED</p>
                                        </Media.Body>
                                    </Media>
                                </Panel.Body>
                                <Panel.Footer>
                                    <Row>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-star"></span> Installaion Pro 
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-gear"></span> Service Pro
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-home"></span> Residential Pro 
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-group"></span> Commercial Pro
                                        </Col>
                                    </Row>
                                    
                                </Panel.Footer>
                            </Panel>
                        </Col>
                        <Col md={4} sm={4}>
                            <Panel >
                                <Panel.Body>
                                    
                                    <Media>
                                        <Media.Body>
                                            <Media.Heading>Carolina Pool Specialists</Media.Heading>

                                            <h3 className="mediaNumber"><span className="fa fa-phone"/>  <span className="tap"/> 1.888.888.8888</h3>
                                            
                                            <p className="mediaSubHeading">Can’t talk now? Click below to send an email.</p>
                                            
                                            <ButtonToolbar className="theCenterFlex">
                                                <Button  onClick={this.onOpenModal}><span className="fa fa-envelope" /> Contact this Pro</Button>
                                            </ButtonToolbar>

                                            <h5>Business Hours</h5>
                                            <p>Weekdays 7:00am - 7:00pm</p>
                                            <p>Saturdays 7:00am - 3:00pm</p>
                                            <p>Sundays - CLOSED</p>
                                        </Media.Body>
                                    </Media>
                                </Panel.Body>
                                <Panel.Footer>
                                    <Row>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-star"></span> Installaion Pro 
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-gear"></span> Service Pro
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-home"></span> Residential Pro 
                                        </Col>
                                        <Col md={6} xs={6}>
                                            <span className="fa fa-group"></span> Commercial Pro
                                        </Col>
                                    </Row>
                                    
                                    
                                    
                                </Panel.Footer>
                            </Panel>
                        </Col>
                    </Row>

                    
                </Grid>
                <Modal open={open} onClose={this.onCloseModal} className="fromModals">
                    <Modaled />
                </Modal>

            </div>
        );
    }
}

export default Homepage;
