import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import {
//   Button,
//   Modal,
//   Form,
//   Dropdown,
//   Grid,
//   Header,
//   Message,
//   Segment
// } from "semantic-ui-react";
import CharactersPage from "./CharactersPage";
import styled from "styled-components";

const LetterBinder = styled.h1`
  color: rgb(114, 46, 19);
  font-family: "Hanalei Fill", cursive;
`;
class IndividualUserPage extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.getIndividualUser();
  }

  getIndividualUser = async () => {
    const userId = this.props.match.params.user_id;

    try {
      const res = await axios.get(`/api/users/${userId}`);
      // console.log(res.data)
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
        <LetterBinder>
          Welcome to your Page {this.state.user.username}. Your options are as
          follows
        </LetterBinder>
        <p>Welcome to Live Action Camp {this.state.user.username}. This is your premier destination for live action role playing. Please see your registered roles for upcoming camps below. Feel free to add more roles or edit existing ones </p>
        <CharactersPage params={this.props.params} {...this.props} />
      </div>
    );
  }
}

export default IndividualUserPage;
