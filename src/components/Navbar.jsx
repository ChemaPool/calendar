import React from 'react';
import Styled from "styled-components";

const Nav = Styled.div`
  top: 0;
  z-index: 1;
  width: 800px;
  position: fixed;
  margin-left: -60px;
  background-color: white;
`;

const MenuBar = Styled.div`
  display: flex;
  align-items: center;
  padding: 10px, 10px, 10px, 10px;
`;

const BottomLinear = Styled.div`
  height: 1px;
  background: linear-gradient(to right, rgba(220, 220, 220, .20), rgba(220, 220, 220, 1), rgba(220, 220, 220, .20));
`;

const Div = Styled.div`
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  justify-content: center;
`;

const Label = Styled.label`
  width: 60px;
  margin-top: 50px;
  vertical-align: bottom;
  border-right: 1px solid gainsboro;
`;

const Number = Styled.span`
  font-size: 30px;
  text-align: center;
`;

function Navbar() {
  return (
    <Nav>
      <MenuBar>
        <Div>
          <Label>GMT-06</Label>
        </Div>
        <Div>
          <span>MIÉ</span>
          <br/>
          <Number>8</Number>
        </Div>
      </MenuBar>
      <BottomLinear />
    </Nav>
  );
}

export default Navbar;