import React, { Component } from 'react';
import {BrowserRouter as Router,Switch ,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import HomePage from './components/HomePage';
import IndividualUserPage from './components/IndividualUserPage';
import Navbar from './components/Navbar';
import CharactersPage from './components/CharactersPage';
import NewCharacterPage from './components/NewCharacterPage';
import IndividualCharacterPage from './components/IndividualCharacterPage';
import EditCharacterPage from './components/EditCharacterPage';
import ReactWeather from 'react-open-weather';
import styled from 'styled-components';
import {
  Sidebar,
  Modal,
 Card,
 Image,
 Menu,
 Icon
} from "semantic-ui-react";


class App extends Component {
state ={
users: [],
}
componentDidMount() {
  this.getUsers()
}

getUsers = async () => {
  try {
    const res = await axios.get('/api/users');
    this.setState({ users: res.data });
  }
  catch (err) {
    console.log(err)
    await this.setState({ error: err.message })
    return err.message
  }
}
  render() {
      const AllCharacters = (props) => (
        <CharactersPage users={this.state.users} {...props}  character={this.state.users.characters}/>
      )
    
    const IndividualCharacters = (props) => (
        <IndividualCharacterPage users={this.state.users}{...props} />
      )
      const EditCharacter = (props) => (
        <EditCharacterPage users={this.state.users}{...props} />
      )
    
    const ShowUser = (props) => (
        <IndividualUserPage users={this.state.users}{...props} />
      )
    
      const NewCharacter = (props) => (
        <NewCharacterPage users={this.state.users}{...props} />
      )
  
    return (
      <Router>
        <div>
        <Navbar />

        {/* <Sidebar   icon='labeled' inverted vertical visible width='thin'>

      <ReactWeather
    forecast="today"
    apikey="d1f97e829f4847ad8f613810183107"
    type="city"
    city="Atlanta"/>
    </Sidebar> */}

        
        {/* <ReactWeather
    forecast="today"
    apikey="d1f97e829f4847ad8f613810183107"
    type="city"
    city="Atlanta"/> */}
     

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/users/:user_id' render={ShowUser}/>
        <Route exact path='/users/:user_id/characters' render={AllCharacters}/>
        
        <Route exact path='/users/:user_id/characters/new' component={NewCharacter}/>
        <Route exact path='/users/:user_id/characters/:id' component={IndividualCharacters}/>
        <Route exact path='/users/:user_id/characters/:id' render={EditCharacter}/>
        
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
