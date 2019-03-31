import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

const RoundNav = props => {
  return (
    <Nav tabs>
      {
        props.rounds.map(round => {
          return(
            <NavItem>
              <NavLink onClick={() => props.changeSelectedRound(round.roundNumber)}>{round.roundNumber}</NavLink>
            </NavItem>
          )
        })
      }
      <NavItem>
        <NavLink onClick={() => props.roundConcat()}>+</NavLink>
      </NavItem>
    </Nav>
  )
}

export default RoundNav
