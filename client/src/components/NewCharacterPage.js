import React, { Component } from 'react'
import { Form, Modal } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class NewCharacterPage extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Modal.Content>
      <Form>
        
      <Form.Field>
      <h1>Enter A New Character's Information Below</h1>
      
    </Form.Field>

        <Form.Group inline>
          <label>Status</label>
          <Form.Radio
            label='King'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Warrior'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Peasant'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field>
      <label>Character Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Weapon</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Avatar</label>
      <input placeholder='Last Name' />
    </Form.Field>
        
      </Form>
      </Modal.Content>
    )
  }
}

export default NewCharacterPage;