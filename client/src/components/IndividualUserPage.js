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

class IndividualUserPage extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.getIndividualUser();
  }

  getIndividualUser = async () => {
    const userId = this.props.match.params.user_id

    try {
      const res = await axios.get(`/api/users/${userId}`);
      console.log(res.data)
      await this.setState({ user: res.data.user });
      // return res.data;
    } catch (err) {
      console.error(err);
      // await this.setState({ error: err.message });
      // return err.message;
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.username}</h1>
      </div>
    );
  }
}

export default IndividualUserPage;
