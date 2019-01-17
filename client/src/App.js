/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';

import FullStandings from './components/FullStandings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    axios.get('/espn/teamstandings',
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const data = res.data;
        this.setState({
          teams: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { teams } = this.state;
    return (
      <div id="fullstandings">
        <FullStandings teams={teams} />
      </div>
    );
  }
}
