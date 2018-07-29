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
      // <li key={character.id} >{character.character_name}</li>
    //   <div>
    //   <Card
    //   image={character.avatar}
    //   header={character.character_name}
    //   meta={character.status}
    //   description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      
    // />
    // <Icon color='red' name='users' />
    // <Icon color='orange' name='users' />
    //   </div>


<Card>
    <Image src={character.avatar} />
    <Card.Content>
      <Card.Header>{character.character_name}</Card.Header>
      <Card.Meta>
        <span className='date'>{character.status}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='edit' />
        Edit
      </a>
      <a>
        <Icon name='delete' />
        delete
      </a>
    </Card.Content>
  </Card>
    )
  });
    return (
      <div>
        <CardCover>
{eachCharacter}

        </CardCover>
        
         <Modal trigger={<Button>Add New Character</Button>}>
         <NewCharacterPage />
         </Modal>
      </div>
    );
  }
}

export default CharactersPage;
