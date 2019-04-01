import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

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
        <NavLink onClick={() => props.roundConcat()}>+</NavLink>
      </NavItem>
    </Nav>
  )
}

export default RoundNav
