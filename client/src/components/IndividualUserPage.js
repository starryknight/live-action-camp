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

class IndividualUserPage extends Component {
    state = {
        user: {},
      };
    
      componentDidMount() {
        this.getIndividualUser();
      }
    
      getIndividualUser = async () => {
        try {
          const res = await axios.get("/api/users/:id");
          await this.setState({ user: res.data });
          return res.data;
        } catch (err) {
          console.log(err);
          await this.setState({ error: err.message });
          return err.message;
        }
      };
    render() {
        return (
            <div>
            <h1>this is the individual user page</h1>
            </div>
        );
    }
}

export default IndividualUserPage;