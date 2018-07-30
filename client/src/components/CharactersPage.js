import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  
  Modal,
 Card,
 Image,
 Icon
} from "semantic-ui-react";
import NewCharacterPage from "./NewCharacterPage";
import styled from 'styled-components'
import EditCharacterPage from "./EditCharacterPage";

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

  handleDelete = () => {
    if (this.props.match.params) {
      const userId = this.props.match.params.user_id;
      const characterId = this.props.match.params.character.id;
    //  conso `/api/users/${character.user_id}/characters/${character.id
      // const userId = 1
      // const characterId = 1
      console.log("user id", userId)
      console.log("character id", characterId)
      axios.delete(`/api/users/${userId}/characters/${characterId}`).then(res => {
        this.props.history.push(`/users/${userId}/characters`);
      });
    }
  };

  render() {
    console.log(this.props)
    const eachCharacter = this.state.characters.map((character) => {
       
      
    return (

<Card>
  <Link to={`/users/${character.user_id}/characters/${character.id}`}>
    <Image src={character.avatar} />
    
    <Card.Content>
      <Card.Header>{character.character_name}</Card.Header>
      <Card.Meta>

        <span className='date'>{character.status}</span>
      </Card.Meta>
      
    </Card.Content>
    </Link>
    <Card.Content extra>

      <Modal trigger={<a> <Icon name='edit'/>Edit</a>}>
         <EditCharacterPage />
         </Modal>
  <button key={this.state.id} onClick={this.handleDelete}>Delete</button>
      
        {/* <Icon name='delete' onClick={this.handleDelete} />
        delete */}
      
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
