import React, { Component } from "react";
import { Button } from "../../node_modules/semantic-ui-react";

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

    // if (){
    //     return "loading"
    // }

    return (
      <div>
        {!TenDayWeather ? (
          "loading"
        ) : (
          <div>
            <h1>Expected Rain: {TenDayWeather.rain["3h"]} inches</h1>
            <h1>Expected Clouds: {TenDayWeather.clouds["all"]}%</h1>
            <h1>Expected Winds: {TenDayWeather.wind["speed"]} mph</h1>
          </div>
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
      </div>
    );
  }
}

export default ApiCallPage;
