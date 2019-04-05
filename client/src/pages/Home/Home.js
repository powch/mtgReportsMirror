import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentReportListItem from '../../components/RecentReportListItem';

const Home = props => {
  return (
    <Container>
      <Row>
        <Col sm='3' />
        <Col sm='6'>
          <Row className='mb-3'>
            <Col className='d-flex justify-content-center' sm='12'>
              <div>[PUT A GRAPH HERE]</div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm='12'>
              <h3 className='mb-3'>Recent Reports</h3>
              {
                props.recentUpdates.map((report, idx) => {
                  const opponents = report.rounds.map(
                    round => `${round.opponentDeck}`
                  );
                  const uniqueOpponents = [...new Set(opponents)]
                  const wins = report.rounds.filter(round => round.result === 'Win')
                  const loses = report.rounds.filter(round => round.result === 'Lose')

                  return (
                    <RecentReportListItem
                      key={report._id}
                      userDeck={report.userDeck}
                      reportedBy={report.reportedBy}
                      wins={wins.length}
                      loses={loses.length}
                      opponents={uniqueOpponents}
                    />
                  )
                })
              }
            </Col>
          </Row>
        </Col>
        <Col sm='3' />
      </Row>
    </Container>
  )
}

export default Home
