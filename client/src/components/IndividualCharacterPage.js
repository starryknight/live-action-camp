import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Card, Image, Icon } from "semantic-ui-react";
import NewCharacterPage from "./NewCharacterPage";
import styled from "styled-components";
import EditCharacterPage from "./EditCharacterPage";
import IndividualUserPage from "./IndividualUserPage";

const CardCover = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
`;
class IndividualCharacterPage extends Component {
  state = {
    user: {},
    character: {}
  };

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter = async () => {
    console.log("params", this.params);
    const userId = this.props.match.params.user_id;
    const characterId = this.props.match.params.id;
    try {
      const userRes = await axios.get(`/api/users/${userId}`);
      const characterRes = await axios.get(
        `/api/users/${userId}/characters/${characterId}`
      );
      // console.log(res.data)
      await this.setState({
        user: userRes.data,
        character: characterRes.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleDelete = () => {
    if (this.props.match.params) {
      const userId = this.props.match.params.user_id;
      const characterId = this.props.match.params.id;

      console.log("user id", userId);
      console.log("character id", characterId);
      axios
        .delete(`/api/users/${userId}/characters/${characterId}`)
        .then(res => {
          this.props.history.push(`/users/${userId}/characters`);
        });
    }
  };

  render() {
    const character = this.state.character;

    return (
      <CardCover>
        <br />
        <Card>
          <Image src={character.avatar} />

          <Card.Content>
            <Card.Header>{character.character_name}</Card.Header>
            <Card.Meta>
              <span className="date">{character.status}</span>
            </Card.Meta>
          </Card.Content>

          <Card.Content extra>
            <Modal
              trigger={
                <a>
                  {" "}
                  <Icon name="edit" />Edit
                </a>
              }
            >
              <EditCharacterPage {...this.props} />
            </Modal>
            <button key={this.state.id} onClick={this.handleDelete}>
              Delete
            </button>

            {/* <Icon name='delete' key={this.state.id} onClick={this.handleDelete} />
        delete */}
          </Card.Content>
        </Card>

        <div>
          <h1>Why nobody should mess with {character.character_name}</h1>
          <Image src={character.weapon} />
        </div>
      </CardCover>
    );

    return (
      <div>
        <Card.Group itemsPerRow={4}>{character}</Card.Group>
        <br />
        <Modal
          trigger={
            <a>
              {" "}
              <Icon name="external alternate" />Add New Character
            </a>
          }
        >
          <NewCharacterPage params={this.props.params}{... this.props}/>
        </Modal>
      </div>
    );
  }
}

export default IndividualCharacterPage;
