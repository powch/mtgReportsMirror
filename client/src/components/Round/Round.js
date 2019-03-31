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
    <RoundNav
      rounds={props.rounds} 
      roundConcat={props.roundConcat}
      changeSelectedRound={props.changeSelectedRound}
    />
    <Row className='mb-3'>
      <Col sm='3' />
      <Col sm='6'>
        <h3>Report</h3>
      </Col>
      <Col sm='3' />
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
              onChange={props.handleInputChange}
              defaultValue={'DEFAULT'}
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
              onChange={props.handleInputChange}
              defaultValue={'DEFAULT'}
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
