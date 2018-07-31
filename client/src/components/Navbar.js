import React, { Component } from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import axios from "axios";
import ReactWeather from "react-open-weather";
//Optional include of the default css styles
import { Link } from "react-router-dom";
import "react-open-weather/lib/css/ReactWeather.css";
import ApiCallPage from "./ApiCallPage";

class Navbar extends Component {
  state = {
    user: {},
    character: {
      status: "",
      character_name: "",
      weapon: "",
      avatar: "",
      tribe_id: 0
    }
  };
  // componentDidMount() {
  //   this.weather();
  // }
  // weather = async () => {
  //   try {
  //     const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&APPID=540c4ac773833f7a0b5e372dfdeba337&units=imperial`)
  //     this.setState({ weather: res.data, open: true })
  //   } catch (err) {
  //     console.log(err)
  //     alert("Zip code not found - try again..")
  //   }
  // };

  handleApiCall = event => {
    event.preventDefault();

    const userId = this.props.match.params.user_id;
    //   const payload = {...this.state.character}

    axios
      .post(`/api/users/${userId}/characters`, this.state.character)
      .then(res => {
        this.props.history.push(`/users/${userId}/characters`);
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <Menu attached="top">
          <Dropdown item icon="wrench" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item href="/">Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <ApiCallPage />
              </div>
              <div className="results" />
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
