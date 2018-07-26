import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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
                <div className='login-form'>
    
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>

            </div>
            
        );
    }
}

export default HomePage;