import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {
        temperature: '',
        description: '',
        icon: ''
      }
    };
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Carstairs,CA&units=metric&appid=c64f4820ccd494857f49b91eb10aeb38'
      )
      .then((res) => {
        console.log();

        this.setState({
          weather: {
            temperature: Math.round(res.data.main.temp),
            description: res.data.weather[0].main,
            icon: `http://openweathermap.org/img/w/${
              res.data.weather[0].icon
            }.png`
          }
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="weather">
        <a
          href="https://openweathermap.org/city/5917688"
          target="_blank"
          className="header__link-underline"
        >
          <img className="header__icon" src={this.state.weather.icon} />
          &nbsp;{this.state.weather.description}{' '}
          {this.state.weather.temperature}&deg;C
        </a>
      </div>
    );
  }
}
