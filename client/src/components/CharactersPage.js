import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
 Card,
 Image,
 Icon
} from "semantic-ui-react";
import NewCharacterPage from "./NewCharacterPage";
import styled from 'styled-components'

const CardCover = styled.div`
display:flex
`
class CharactersPage extends Component {
  state = {
    user:{},
    characters: []
  };

  componentDidMount() {
    this.getCharacters();
  }
  handleDelete = () => {
    if (this.props.match.params) {
      const userId = this.props.match.params.user_id;
      const characterId = this.props.match.params.id;
      
      axios.delete(`/api/users/${userId}/characters/${characterId}`).then(res => {
        this.props.history.push(`/users/${userId}`);
      });
    }
  };
 
  getCharacters = async () => {
    console.log("params", this.params)
    const userId = this.props.match.params.user_id
    try {
      const userRes = await axios.get(`/api/users/${userId}`);
      const charactersRes = await axios.get(`/api/users/${userId}/characters`)
      // console.log(res.data)
      await this.setState({ 
        user: userRes.data,
        characters: charactersRes.data
      });
      
      // return res.data;
    } catch (err) {
      console.error(err);
      // await this.setState({ error: err.message });
      // return err.message;
    }
  };
  render() {
    const eachCharacter = this.state.characters.map((character) => {
       
      
    return (

<Card>
  <Link to={`/api/users/${character.user_id}/characters/${character.id}`}>
    <Image src={character.avatar} />
    
    <Card.Content>
      <Card.Header>{character.character_name}</Card.Header>
      <Card.Meta>

        <span className='date'>{character.status}</span>
      </Card.Meta>
      
    </Card.Content>
    </Link>
    <Card.Content extra>
      <a>
        <Icon name='edit' />
        Edit
      </a>

      <a>
        <Icon name='delete' onclick={this.handleDelete} />
        delete
      </a>
    </Card.Content>
  </Card>
    )
  });
    return (
      <div>
        <Card.Group itemsPerRow={4}>
{eachCharacter}

        </Card.Group>
        <br/>
         <Modal trigger={<a> <Icon name='external alternate'/>Add New Character</a>}>
         <NewCharacterPage />
         </Modal>
      </div>
    );
  }
}

export default CharactersPage;
