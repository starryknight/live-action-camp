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
        {/* <Link to={`/users/${this.props.match.params.user_id}/characters`}>Click here To Create a New Character</Link> */}
        <NewCharacterPage />
         </Modal>
      </div>
    );
  }
}

export default CharactersPage;
