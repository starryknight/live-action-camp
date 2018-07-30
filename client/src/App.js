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
        <CharactersPage users={this.state.users}{...props}  character={this.state.users.characters}{...props}/>
      )
    
    const IndividualCharacters = (props) => (
        <IndividualCharacterPage users={this.state.users}{...props} />
      )
    
    const ShowUser = (props) => (
        <IndividualUserPage users={this.state.users}{...props} />
      )
    
  
  
    return (
      <Router>
        <div>
        <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/users/:user_id/characters' component={AllCharacters}/>
        <Route exact path='/users/:user_id/characters/new' component={NewCharacterPage}/>
        <Route exact path='/users/:user_id/characters/:id' component={IndividualCharacters}/>
        <Route exact path='/users/:user_id' component={ShowUser}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
