import React, { Component } from 'react';
import Report from '../../components/Report';
import Round from '../../components/Round';

class SubmitReport extends Component {
  state = {
    selectedRound: 1,
    pageToRender: 'Report',
    format: '',
    event: '',
    userDeck: '',
    rounds: [
      {
        roundNumber: 1,
        opponentDeck: '',
        score: '',
        sideboardRecommendation: '',
        notes: ''
      }
    ]
  };

  handlePageChange = page => {
    this.setState({ pageToRender: page });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  roundConcat = () => {
    this.setState({
      rounds: this.state.rounds.concat({
        roundNumber: this.state.rounds.length + 1,
        opponentDeck: '',
        score: '',
        sideboardRecommendation: '',
        notes: ''
       })
    });
  };

  changeSelectedRound = round => {
    this.setState({ selectedRound: round })
  }

  pageRender() {
    switch (this.state.pageToRender) {
      case 'Report':
        return <Report 
                  handleInputChange={this.handleInputChange} 
                  handlePageChange={this.handlePageChange} 
                />

      case 'Round':
        return <Round 
                  rounds={this.state.rounds} 
                  roundConcat={this.roundConcat}
                  selectedRound={this.state.selectedRound}
                  changeSelectedRound={this.changeSelectedRound}
                  handleInputChange={this.handleInputChange} 
                />

      
    
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