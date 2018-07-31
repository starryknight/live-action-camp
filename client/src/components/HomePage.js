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

const Banner = styled.h1`
font-family: 'Hanalei Fill', cursive;
font-size: 5rem;
color:rgb(66, 244, 140);
text-shadow:5px 5px 5px olive;
`;
const HomeCover = styled.div`
height:100vh;
background:url("https://source.unsplash.com/MwYBzsaSAGQ");
`
const ListWrapper = styled.li`
list-style-type: none;
text-decoration:none;
color:black;
font-size:15px;
`;
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
        
      return (<ListWrapper key={user.id} ><Link to={userId}>{user.username}</Link></ListWrapper>)
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
              <Banner as="h2" color="teal" textAlign="center">
                Live Action Camp
              </Banner>
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

