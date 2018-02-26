import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { ToggleButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';

class Modaled extends Component {
  
  render() {
    
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    return (
      <div>
        <div className="modalHeader">
          <h4>Email</h4>
          <h3>Premium Pools & Spas of Charlotte</h3>
        </div>
        <div className="modalBody">
          <p>Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.</p>

          <Well>
            <form>
              <FieldGroup id="formControlsText" type="text" label="First and Last name" required/>
              <FieldGroup id="formControlsNumber" type="number" label="Phone number" required/>
              <FieldGroup id="formControlsEmail" type="email" label="Email address" required/>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Comments or questions <span>Optional</span></ControlLabel>
                <FormControl componentClass="textarea" />
              </FormGroup>
              <FormGroup className="owned">
                <ControlLabel>Do you currently own a pool or spa? <span>Optional</span></ControlLabel>
              </FormGroup>
              <FormGroup className="yesNo">
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1} className="yes"><span className="check"></span> Yes</ToggleButton>
                    <ToggleButton value={2} className="no"><span className="check"></span> No</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </FormGroup>
              <hr />
              <FormGroup className="modalSubmitButton text-center">
                <Button type="submit"><span>Send my email</span> <span className="glyphicon glyphicon-chevron-right"></span></Button>
              </FormGroup>
            </form>
          </Well>
        </div>
        <div className="modalFooter">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
        </div>
      </div>
    );
  }
}

export default Modaled;
