import React, { Component } from 'react';
import { Button, Modal, Checkbox, Form } from 'semantic-ui-react';

class NewUserPage extends Component {
    render() {
        return (
            
                <Modal.Content>
                <Form>
    <Form.Field>
      <label>User Name</label>
      <input placeholder='User Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
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