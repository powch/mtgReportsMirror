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
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import deckList from '../../deckList';

const Report = props => (
  <Container>
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
          <Row>
            <Col sm='12'>
              <FormGroup>
                <Label for='formatSelect'>Format:</Label>
                <Input
                  type='select'
                  name='format'
                  value={props.format}
                  id='formatSelect'
                  onChange={props.handleInputChange}
                >
                  <option value='DEFAULT' disabled>
                    Select a format
              </option>
                  <option>Legacy</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Event:</Label>
                <Input
                  type='text'
                  name='event'
                  value={props.event}
                  placeholder='Event Name'
                  onChange={props.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='deckSelect'>Your Deck:</Label>
                <Input
                  type='select'
                  name='userDeck'
                  value={props.userDeck}
                  id='deckSelect'
                  onChange={props.handleInputChange}
                >
                  <option value='DEFAULT' disabled>
                    Select a deck
              </option>
                  {deckList.map((deck, idx) => (
                    <option key={idx}>{deck}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-end' sm='12'>
              <Button
                color='success'
                disabled={props.isReportInvalid}
                onClick={() => props.handlePageChange('Round')}
              >
                Add Rounds <FontAwesomeIcon icon={faAngleRight}/>
          </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col sm='3' />
    </Row>
  </Container>
);

export default Report;
