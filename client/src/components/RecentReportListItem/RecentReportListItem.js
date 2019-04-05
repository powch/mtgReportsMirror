import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './RecentReportListItem.css'

const formatOpponents = opponents => {
  if (opponents.length === 1) {
    return <div className='subtext'>VS. {opponents}</div>
  } else if (opponents.length >= 2) {
    return <div className='subtext'>VS. {opponents[0]}, {opponents[1]}, etc.</div>
  }
}

const RecentReportListItem = props => {
  return (
    <Row className='p-1 mr-0 ml-0 mb-2 bg-grey list-item'>
      <Col xs="6">
        <Row>
          <Col>
            <div>{props.userDeck}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='subtext'>by {props.reportedBy}</div>
          </Col>
        </Row>
      </Col>
      <Col xs="4">
        <Row>
          <Col>
            <div>{props.wins}W | {props.loses}L</div>
          </Col>
        </Row>
        <Row>
          <Col>
            {formatOpponents(props.opponents)}
          </Col>
        </Row>
      </Col>
      <Col className='d-flex justify-content-end align-self-center'>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </Col>
    </Row>
  );
}

export default RecentReportListItem