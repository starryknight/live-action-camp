import React, { Component } from 'react';
import { Button, Modal, Checkbox, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class NewUserPage extends Component {
    render() {
        return (
            
                <Modal.Content>
                <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    </Modal.Content>
            
        );
    }
}

export default NewUserPage;