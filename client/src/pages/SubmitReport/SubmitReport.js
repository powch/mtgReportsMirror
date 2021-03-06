import React, { Component } from 'react';
import Report from '../../components/Report';
import Round from '../../components/Round';
import API from '../../utils/API';

class SubmitReport extends Component {
  state = {
    activeRound: 0,
    pageToRender: 'Report',
    format: 'DEFAULT',
    event: '',
    userDeck: 'DEFAULT',
    rounds: [
      {
        opponentDeck: 'DEFAULT',
        result: 'DEFAULT',
        sideboardRecommendation: 'DEFAULT',
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
        opponentDeck: 'DEFAULT',
        result: 'DEFAULT',
        sideboardRecommendation: 'DEFAULT',
        notes: ''
      })
    });
  };

  changeActiveRound = roundIdx => {
    this.setState({ activeRound: roundIdx });
  };

  editActiveRound = event => {
    const { name, value } = event.target;
    this.setState(state => {
      const rounds = state.rounds.map((round, i) => {
        if (i === state.activeRound) {
          return {
            ...round,
            [name]: value
          };
        } else {
          return round;
        }
      });
      return {
        rounds
      };
    });
  };

  deleteActiveRound = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this round?')

    if (confirmDelete) {
      this.setState(state => {
        const rounds = state.rounds.filter(
          (round, i) => i !== this.state.activeRound
        );

        return {
          activeRound:
            this.state.activeRound === 0 ? 0 : this.state.activeRound - 1,
          rounds
        };
      });
    }
  };

  handleReportSubmit = event => {
    event.preventDefault()
    const confirmSubmit = window.confirm('Are you sure you want to submit this report?')

    if (confirmSubmit) {
      const {
        a,
        b,
        ...report
      } = this.state;

      //put API POST stuff here
      API.submitReport({
        fbId: this.props.fbId,
        reportedBy: this.props.displayName,
        ...report
      })

      this.props.refreshHomeReports()
      this.props.history.push('/')
    }

  }

  pageRender() {

    const isReportInvalid = this.state.format === 'DEFAULT' ||
                           this.state.userDeck === 'DEFAULT';

    switch (this.state.pageToRender) {
      case 'Report':
        return (
          <Report
            format={this.state.format}
            event={this.state.event}
            userDeck={this.state.userDeck}
            isReportInvalid={isReportInvalid}
            handleInputChange={this.handleInputChange}
            handlePageChange={this.handlePageChange}
          />
        );

      case 'Round':
        return (
          <Round
            rounds={this.state.rounds}
            roundConcat={this.roundConcat}
            activeRound={this.state.activeRound}
            roundToBeEdited={this.state.rounds[this.state.activeRound]}
            editActiveRound={this.editActiveRound}
            deleteActiveRound={this.deleteActiveRound}
            changeActiveRound={this.changeActiveRound}
            handleReportSubmit={this.handleReportSubmit}
            handlePageChange={this.handlePageChange}
          />
        );

      default:
        break;
    }
  }

  render() {
    return <div>{this.pageRender()}</div>;
  }
}

export default SubmitReport;
