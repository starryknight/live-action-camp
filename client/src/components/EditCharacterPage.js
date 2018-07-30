import React, { Component } from "react";
import axios from "axios";
import { Form, Modal, Button } from "semantic-ui-react";

class EditCharacterPage extends Component {
  state = {
    user: {},
    character: {
      id: "",
      character_name: "",
      status: "",
      weapon: "",
      avatar: ""
      // tribe_id:,
    }
  };
  getCharacter = async () => {
    console.log("params", this.params)
    const userId = this.props.match.params.user_id
    const characterId=this.props.match.params.id
    try {
      const userRes = await axios.get(`/api/users/${userId}`);
      const characterRes = await axios.get(`/api/users/${userId}/characters/${characterId}`)
      // console.log(res.data)
      await this.setState({ 
        user: userRes.data,
        character: characterRes.data
      });
      
    } catch (err) {
      console.error(err);
      
    }
  };

  componentDidMount() {
    this.getCharacter();
  }
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.match.params) {
      const userId = this.props.match.params.userId;
      const characterId = this.props.match.params.id;

      axios
        .patch(
          `/api/users/${userId}/characters/${characterId}/edit`,
          this.state
        )
        .then(res => {
          this.props.history.push(`/users/${userId}/characters`);
        });
    }
  };

  handleChange = event => {
    const inputName = event.target.name;
    const userInput = event.target.value;

    const newState = { ...this.state };
    newState[inputName] = userInput;
    this.setState(newState);
  };

  render() {
    return (
      <Modal.Content>
        <Form>
          <Form.Field>
            <h1>Enter A New Character's Information Below</h1>

            {/* </Form.Field> */}

            {/* <Form.Group inline>
              <label>Status</label>
              <Form.Radio
                label='King'
                value='King'
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
            </Form.Group> */}
            {/* <Form.Field> */}
            <label>Status</label>
            <input
              placeholder={this.state.character_name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Character Name</label>
            <input placeholder="Character Name" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Weapon</label>
            <input placeholder="Weapon" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Avatar</label>
            <input placeholder="Avatar" onChange={this.handleChange} />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit}>
            submit
          </Button>
        </Form>
      </Modal.Content>
    );
  }
}

export default EditCharacterPage;
