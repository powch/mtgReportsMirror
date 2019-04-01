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
import RoundNav from '../RoundNav';
import deckList from '../../deckList';

const Round = props => (
  <Container>
    <Row className='mb-3 mt-3'>
      <Col sm='3'></Col>
      <Col sm='6'>
        <Row>
          <Col sm='3'>
            <h3>Rounds</h3>
          </Col>
          <Col sm='5'></Col>
          <Col sm='3'>
            <Button
              onClick={() => props.handlePageChange('Report')}
            >Back to Report</Button>
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
      <Col sm='3'></Col>
    </Row>
    <Row>
      <Col sm='3' />
      <Col sm='6'>
        <Form>
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
          <Button onClick={() => props.roundConcat()}>Test</Button>
        </Form>
      </Col>
      <Col sm='3' />
    </Row>
  </Container>
);

export default Round;
