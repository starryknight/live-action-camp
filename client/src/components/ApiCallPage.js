import React, { Component } from 'react';
import { Button } from '../../node_modules/semantic-ui-react';


// class ApiCallPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: '',
//       img: ''
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ term: event.target.value });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const api_key = 'dc6zaTOxFJmzC';
//     const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`
//     `http://api.openweathermap.org/data/2.5/forecast/daily?zip={zip code},{country code}`
// ;
//     fetch(url)
//       .then(response => response.json())
//       .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
//       .catch(e => console.log('error', e));
//   }
  

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.term} onChange={this.handleChange} />
//           <Button>Search!</Button>
//         </form>
//         <img src={this.state.img} height="100" alt={this.state.term} />
//       </div>
//     );
//   }
// }

// export default ApiCallPage;

// api_key = 2ca952c87e60c50d40ec8748241a6a1d



class ApiCallPage extends Component {
   state = {
            weather:{},
           list:[]
            };
    
    handleChange = (event) => {
            this.setState({ city: event.target.value });
          }
        
        handleSubmit = async (event) => {
            event.preventDefault();
            const callApi = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},us&APPID=2ca952c87e60c50d40ec8748241a6a1d&units=imperial`);
            const data= await callApi.json();
            
            this.setState({weather:data})
            console.log(data);            
        }
        render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
           <input type="text" name="city" placeholder="city?" onChange={this.handleChange} />
          <Button type="submit">See Weather Forecast</Button>
        </form>
        {/* <h1>{this.state.temp}</h1> */}
{/* //         <img src={this.state.img} height="100" alt={this.state.term} /> */}
            </div>
        );
    }
}

export default ApiCallPage;