import React, { Component } from 'react';
import Report from '../../components/Report';

class SubmitReport extends Component {
  state = {
    currentPage: 'Report',
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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  pageRender() {
    switch (this.state.currentPage) {
      case 'Report':
        return <Report handleInputChange={this.handleInputChange} handlePageChange={this.handlePageChange} />

      
    
      default:
        break;
    }
  }

  render() {
    return(
      <div>
        {this.pageRender()}
      </div>
    )
  }


};

export default SubmitReport;