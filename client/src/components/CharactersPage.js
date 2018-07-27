import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Modal,
  Form,
  Dropdown,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

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
       
      
    return (<li key={character.id} >{character.character_name}</li>)
      
  });
    return (
      <div>
         {eachCharacter}
      </div>
    );
  }
}

export default CharactersPage;
