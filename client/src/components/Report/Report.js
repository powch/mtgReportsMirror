import React from 'react';
import { Form, FormGroup,Label, Input, Container, Row, Col, Button } from 'reactstrap';
import deckList from './deckList';

const Report = props => (
  <Container>
    <Row>
      <Col sm="3" />
      <Col sm="6">
        <Form>
          <FormGroup>
            <Label for="formatSelect">Format:</Label>
            <Input type="select" name="format" id="formatSelect" onChange={props.handleInputChange}>
              <option selected disabled>Select a format</option>
              <option>Legacy</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label>Event:</Label>
            <Input type="text" name='event' placeholder='Event Name' onChange={props.handleInputChange} />
          </FormGroup>

          <FormGroup>
            <Label for="deckSelect">Your Deck:</Label>
            <Input type="select" name="userDeck" id="deckSelect" onChange={props.handleInputChange}>
              <option selected disabled>Select a deck</option>
              {deckList.map((deck, idx) => (
                <option key={idx}>{deck}</option>
              ))}
            </Input>
          </FormGroup>

          <Button color="success" onClick={() => props.changePage('Round')}>
            Add Rounds
          </Button>
        </Form>
      </Col>
      <Col sm="3" />
    </Row>
  </Container>
);

export default Report;