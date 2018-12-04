import React, { Component } from 'react';
import { FormBtn, FormSelect, Input, TextArea } from '../../components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class SubmitReport extends Component {
  state = {
    format: '',
    event: '',
    userDeck: '',
    rounds: [
      {
        round: 1,
        opponentDeck: '',
        score: {
          wins: 0,
          losses: 0
        },
        sideboardRecommendation: '',
        notes: ''
      },
      {
        round: 2,
        opponentDeck: '',
        score: {
          wins: 0,
          losses: 0
        },
        sideboardRecommendation: '',
        notes: ''
      },
      {
        round: 3,
        opponentDeck: '',
        score: {
          wins: 0,
          losses: 0
        },
        sideboardRecommendation: '',
        notes: ''
      }
    ]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
};

export default SubmitReport;