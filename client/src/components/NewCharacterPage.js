import React, { Component } from "react";
import axios from "axios";
import { Form, Modal, Button } from "semantic-ui-react";

class EditCharacterPage extends Component {
  state = {
    user: {},
    character: {
        status:"",
    character_name:"",
    weapon:"",
    avatar:""
    }
  };


  handleChange = event => {
    const inputName = event.target.name;
    const userInput = event.target.value;

    const newState = { ...this.state.character };
    newState[inputName] = userInput;
    this.setState({character: newState});
  };
  
  handleSubmit = event => {
    event.preventDefault();
    // if (this.props.match.params) {
      const userId = this.props.match.params.user_id;
      const characterId = this.props.match.params.id;
    //   const payload = {...this.state.character}

      axios
        .post(
          `/api/users/${userId}/characters`, this.state.character)
        .then(res => {
          this.props.history.push(`/users/${userId}/characters`);
        console.log(res)
        
        });
    // }
    console.log("this is from submit",characterId)
  };

  render() {
    return (
      <Modal.Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <h1>Enter A New Character's Information Below</h1>
            <label>Status</label>
            <input
            name="status"
              placeholder={this.state.character.status}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Character Name</label>
            <input name="character_name" placeholder={this.state.character.character_name} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Weapon</label>
            <input name="weapon" placeholder={this.state.character.weapon} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Avatar</label>
            <input name="avatar" placeholder={this.state.character.avatar } onChange={this.handleChange} />
          </Form.Field>
          <Button type="submit" >
            submit
          </Button>
        </Form>
      </Modal.Content>
    );
  }
}

export default EditCharacterPage;
