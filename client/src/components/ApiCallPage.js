import React, { Component } from "react";
import { Button, Modal } from "../../node_modules/semantic-ui-react";
import styled from "styled-components";

const WeatherCover = styled.div`
 
`;

const WeatherText = styled.h1`
  border-radius:2px;
  background: cyan;
  margin:2px;
`;

class ApiCallPage extends Component {
  state = {
    weather: {
      list: []
    }
  };

  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const callApi = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.city
      },us&APPID=2ca952c87e60c50d40ec8748241a6a1d&units=imperial`
    );
    const data = await callApi.json();

    this.setState({ weather: data });
    console.log(data);
  };

  render() {
    const TenDayWeather = this.state.weather.list[10];  

    return (
      <Modal trigger={<Button>Ten Day Weather Forecast</Button>}>
      <Modal.Content>
        {!TenDayWeather ? (
          "loading"
        ) : (
          <WeatherCover>
            <WeatherText>Expected Rain: {TenDayWeather.rain["3h"]} inches</WeatherText>
            <WeatherText>Expected Clouds: {TenDayWeather.clouds["all"]}%</WeatherText>
            <WeatherText>Expected Winds: {TenDayWeather.wind["speed"]} mph</WeatherText>
          </WeatherCover>
        )}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="city?"
            onChange={this.handleChange}
          />
          <Button type="submit">Ten Day Weather Forecast</Button>
        </form>
        <h1 />
      </Modal.Content>
      </Modal>
    );
  }
}

export default ApiCallPage;
