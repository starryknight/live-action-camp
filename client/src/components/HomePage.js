import React, { Component } from "react";
import { Link } from 'react-router-dom'
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
import NewUserPage from "./NewUserPage";
import styled from 'styled-components';

const HomeCover = styled.div`
height:100vh;
background:url("https://source.unsplash.com/MwYBzsaSAGQ");
`
class HomePage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      const res = await axios.get("/api/users");
      await this.setState({ users: res.data });
      return res.data;
    } catch (err) {
      console.log(err);
      await this.setState({ error: err.message });
      return err.message;
    }
  };
  

  render() {
    const userName = this.state.users.map(user => {
        const userId = `/users/${user.id}`
        
      return (<li key={user.id} ><Link to={userId}>{user.username}</Link></li>)
    });
    return (
      <HomeCover>
          <div>
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Live Action Camp
              </Header>
              <Form size="large">
                <Segment stacked>
                 
                  <Dropdown placeholder='Select Friend' fluid selection options={userName} />

                </Segment>
              </Form>
              <Message>
                New to us?
                <Modal trigger={<Button>Sign Up</Button>}>
                  <NewUserPage />                  
                </Modal>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </HomeCover>
    );
  }
}

export default HomePage;

