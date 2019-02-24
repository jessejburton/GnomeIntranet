import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <Banner />
      </div>
    );
  }
}
