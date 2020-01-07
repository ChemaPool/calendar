import React from 'react';
import Navbar from './Navbar'
import Styled from "styled-components";

const Day = Styled.div`
  width: 750px;
  
  /* border: solid 1px gainsboro; */
  border: none;
  border-top: 1px solid gainsboro;
  padding: 10px;
`;

const Container = Styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = Styled.label`
  /* position: relative; */
  /* margin-bottom: 500px; */
  margin-left: -20px;
  /* border-top: none; */
  /* border: 1px solid gainsboro; */
  /* padding: 0; */
  /* margin: 0; */
  padding-right: 10px;
  border-right: 1px solid gainsboro;

`;

const Meeting = Styled.div`
  border: 1px solid #009ce0;
  background: #009ce0;
  color: white;
  border-radius: 5px;
`;

function ContainerDay() {
  return (
    <Container>
      <Day> <Label>1 AM</Label> </Day>
      <Day> <Label>2 AM</Label> </Day>
      <Day> <Label>3 AM</Label> </Day>
      <Day> <Label>4 AM</Label> </Day>
      <Day> <Label>5 AM</Label> </Day>
      <Day> <Label>6 AM</Label> </Day>
      <Day> <Label>7 AM</Label> </Day>
      <Day> <Label>8 AM</Label> </Day>
      <Day> <Label>9 AM</Label> </Day>
      <Day>
        <Label>10 AM</Label>
        <Meeting>
          Meeting, 10:30am
        </Meeting>
      </Day>
      <Day> <Label>11 AM</Label> </Day>
      <Day> <Label>12 AM</Label> </Day>
      <Day> <Label>1 PM</Label> </Day>
      <Day> <Label>2 PM</Label> </Day>
      <Day> <Label>3 PM</Label> </Day>
      <Day> <Label>4 PM</Label> </Day>
      <Day> <Label>5 PM</Label> </Day>
      <Day> <Label>6 PM</Label> </Day>
      <Day> <Label>7 PM</Label> </Day>
      <Day> <Label>8 PM</Label> </Day>
      <Day> <Label>9 PM</Label> </Day>
      <Day> <Label>10 PM</Label> </Day>
      <Day> <Label>11 PM</Label> </Day>
      <Day> <Label>12 PM</Label> </Day>
    </Container>
  );
}

export default ContainerDay;