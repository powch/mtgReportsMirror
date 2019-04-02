import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const RoundNav = props => {
  return (
    <Nav tabs>
      {
        props.rounds.map((round, idx) => {
          return (
            <NavItem key={`10${idx}`}>
              <NavLink
                active={props.activeRound === idx}
                onClick={() =>
                  props.changeActiveRound(idx)
                }
              >
                {round.roundNumber}
              </NavLink>
            </NavItem>
          );
        })
      }
      <NavItem>
        <NavLink onClick={() => props.roundConcat()}>
          <FontAwesomeIcon icon={faPlus} />
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default RoundNav
