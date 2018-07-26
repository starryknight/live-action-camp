import React, { Component } from 'react';
import axios from 'axios';

class HomePage extends Component {
    state = {
        users:[]
    }

    componentDidMount(){
        this.getUser()
    }

    getUser = async () => {
        try {
          const res = await axios.get('/api/users');
          await this.setState({ users: res.data });
          return res.data;
        }
        
        catch (err) {
          console.log(err)
          await this.setState({ error: err.message })
          return err.message
        }
      }

    render() {
        const userName = this.state.users.map((user) => {
            return(
                <h1>{user.username}</h1>
            );
        })
        return (
            <div>
                <h1>{userName}</h1>
            </div>
        );
    }
}

export default HomePage;