import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  Button,
  Modal,
  Select,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import NewUserPage from "./NewUserPage";

class HomePage extends Component {
  state = {
    users: [],
    redirectToUserPage: false,
    redirectPathname: ""
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

  handleRedirect = userId => {
    this.setState({
      redirectToUserPage: true,
      redirectPathname: `/users/${userId}`
    });
  };

  render() {
    if (this.state.redirectToUserPage) {
      return <Redirect to={this.state.redirectPathname} />;
    }
    const userName = this.state.users.map(user => {
      return <h1>{user.username}</h1>;
    });
    return (
      <div>
        <h1>{userName}</h1>
        <div className="login-form">
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

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
                  <select name="" id="">
                    {this.state.users.map((currentUser, index) => {
                      return (
                        <option
                          key={index}
                          onClick={() => this.handleRedirect(currentUser.id)}
                        >
                          {currentUser.username}
                        </option>
                      );
                    })}
                  </select>
                </Segment>
              </Form>
              <Message>
                New to us?
                <Modal trigger={<Button>Show Modal</Button>}>
                  <NewUserPage />                  
                </Modal>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomePage;

