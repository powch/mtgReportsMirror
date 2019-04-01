import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faTimesCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import RoundNav from '../RoundNav';
import deckList from '../../deckList';

const Round = props => (
  <Container>
    <Row className='mb-3 mt-3'>
      <Col sm='3' />
      <Col sm='6'>
        <Row>
          <Col xs='3'>
            <h3>Rounds</h3>
          </Col>
          <Col xs='6' />
          <Col className='d-flex justify-content-end' xs='3'>
            <Button color='secondary' onClick={() => props.handlePageChange('Report')}>
              <FontAwesomeIcon icon={faAngleLeft} /> Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <RoundNav
              rounds={props.rounds}
              activeRound={props.activeRound}
              roundConcat={props.roundConcat}
              changeActiveRound={props.changeActiveRound}
            />
          </Col>
        </Row>
      </Col>
      <Col sm='3' />
    </Row>
    <Row>
      <Col sm='3' />
      <Col sm='6'>
        <Form>
          <Row>
            <Col sm='12'>
              <FormGroup>
                <Label>Opponent Deck:</Label>
                <Input
                  type='select'
                  name='opponentDeck'
                  onChange={props.editActiveRound}
                  value={props.roundToBeEdited.opponentDeck}
                >
                  <option value='DEFAULT' disabled>
                    Select a deck
                  </option>
                  {deckList.map((deck, idx) => (
                    <option key={idx}>{deck}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Result:</Label>
                <Input
                  type='select'
                  name='result'
                  onChange={props.editActiveRound}
                  value={props.roundToBeEdited.result}
                >
                  <option value='DEFAULT' disabled>
                    Round results
                  </option>
                  <option>Won</option>
                  <option>Lost</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Notes:</Label>
                <Input
                  type='textarea'
                  rows='3'
                  name='notes'
                  onChange={props.editActiveRound}
                  value={props.roundToBeEdited.notes}
                  placeholder='Enter match notes, if any'
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-start' xs='6'>
              {
                (props.rounds.length > 1) ?
                  <Button color='danger' onClick={() => props.deleteActiveRound()}>
                    <FontAwesomeIcon icon={faTimesCircle} /> Delete
                  </Button> :
                  null
              }
            </Col>
            <Col className='d-flex justify-content-end' xs='6'>
              <Button color='success' type='submit'>
                <FontAwesomeIcon icon={faCheckCircle} /> Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col sm='3' />
    </Row>
  </Container>
);

export default Round;
