import React from 'react';
import Styled from "styled-components";

const Nav = Styled.div`
  top: 0;
  /* margin: 0px; */
  width: 800px;
  position: fixed;
  background-color: white;
`;

const MenuBar = Styled.div`
  align-items: center;
  display: flex;
  /* border: solid 1px black; */

  padding: 10px;
`;


// const BottomLinear = Styled.hr`
//   border: 0;
//   height: 1px;
//   background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(220, 220, 220, 1), rgba(0, 0, 0, 0));
// `;

const Div = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 10px;
`;

function Navbar() {
  return (
    <Nav>
      <MenuBar>
        <Div>GMT-06</Div>
        
        <Div>Mie <br/> 8</Div>
                
      </MenuBar>
      {/* <BottomLinear /> */}
    </Nav>
  );
}

export default Navbar;