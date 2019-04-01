import React, { Component } from 'react';
import Report from '../../components/Report';
import Round from '../../components/Round';

class SubmitReport extends Component {
  state = {
    activeRound: null,
    pageToRender: 'Report',
    format: 'DEFAULT',
    event: '',
    userDeck: 'DEFAULT',
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

  componentWillMount = () => {
    this.setState({
      activeRound: this.state.rounds[0]
    });
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

  changeActiveRound = round => {
    this.setState({ activeRound: this.state.rounds[round - 1] })
  }

  pageRender() {
    switch (this.state.pageToRender) {
      case 'Report':
        return <Report
                  format={this.state.format}
                  event={this.state.event}
                  userDeck={this.state.userDeck}
                  handleInputChange={this.handleInputChange} 
                  handlePageChange={this.handlePageChange} 
                />

      case 'Round':
        return <Round 
                  rounds={this.state.rounds} 
                  roundConcat={this.roundConcat}
                  activeRound={this.state.activeRound}
                  changeActiveRound={this.changeActiveRound}
                  handleInputChange={this.handleInputChange}
                  handlePageChange={this.handlePageChange}
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