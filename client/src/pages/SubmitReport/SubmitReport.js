import React, { Component } from 'react';
import Report from '../../components/Report';
import Round from '../../components/Round';

class SubmitReport extends Component {
  state = {
    activeRound: 0,
    pageToRender: 'Report',
    format: 'DEFAULT',
    event: '',
    userDeck: 'DEFAULT',
    rounds: [
      {
        roundNumber: 1,
        opponentDeck: 'DEFAULT',
        result: 'DEFAULT',
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
      activeRound: this.state.rounds.length,
      rounds: this.state.rounds.concat({
        roundNumber: this.state.rounds.length + 1,
        opponentDeck: 'DEFAULT',
        result: 'DEFAULT',
        sideboardRecommendation: 'DEFAULT',
        notes: ''
       })
    });
  };

  changeActiveRound = roundIdx => {
    this.setState({ activeRound: roundIdx })
  }

  editActiveRound = event => {
    const { name, value } = event.target;
    this.setState(state => {
      const rounds = state.rounds.map(( round, i ) => {
        if ( i === state.activeRound ) {
          return {
            ...round,
            [name]: value
          }
        } else {
          return round;
        }
      })
      return {
        rounds
      }
    })
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
                  roundToBeEdited={this.state.rounds[this.state.activeRound]}
                  editActiveRound={this.editActiveRound}
                  changeActiveRound={this.changeActiveRound}
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