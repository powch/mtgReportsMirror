import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import deckList from '../../deckList';

const Round = props => (
  <Container>
    <Row className="mb-3">
      <Col sm="3" />
      <Col sm="6">
        <h3>Report</h3>
      </Col>
      <Col sm="3" />
    </Row>
    <Row>
      <Col sm='3' />
      <Col sm='6'>
        <Form>
          <FormGroup>
            <Label>Opponent Deck:</Label>
            <Input
              type="select"
              name="opponentDeck"
              onChange={props.handleInputChange}
            >
              <option selected disabled>
                Select a deck
          </option>
              {deckList.map((deck, idx) => (
                <option key={idx}>{deck}</option>
              ))}
            </Input>
          </FormGroup>
          <Label>Result:</Label>
          <FormGroup>
            <ButtonGroup>
              <Button color="primary">Win</Button>
              <Button color="primary">Loss</Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
      </Col>
      <Col sm='3' />
    </Row>
  </Container>
);

export default Round;