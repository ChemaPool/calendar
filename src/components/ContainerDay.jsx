import React from 'react';
import Styled from "styled-components";

const Day = Styled.div`
  width: 700px;
  border: none;
  padding: 10px;
  border-top: 1px solid gainsboro;
`;

const Container = Styled.div`
  margin-top: 66px;
`;

const Label = Styled.label`
  top: -20px;
  width: 30px;
  text-align: right;
  position: relative;
  margin-left: -60px;
`;

const Meeting = Styled.div`
  color: white;
  width: 690px;
  border-radius: 5px;
  background: #009ce0;
  border: 1px solid #009ce0;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerLet = Styled.div`
  width: 10px;
  position: relative;
  border-right: 1px solid gainsboro;
`;

function setTime() {
  const hours = [
    '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM',
  ]
  let hourTime = [];

  for (let hour = 0; hour < hours.length; hour++) {
    if (hour === 9){
      hourTime.push(
        <Day key={hours[hour]}>
        <Label>{hours[hour]}</Label>
        <Meeting>
          Meeting, 10:30am
        </Meeting>
      </Day>
      )
    }
    else {
      hourTime.push(
        <Day key={hours[hour]}> <Label>{hours[hour]}</Label> </Day>
      )
    }
  }
  return hourTime;
}

function ContainerDay() {
  return (
    <Container>
      <ContainerLet>
      <Day> <Label></Label> </Day>
      {setTime()}
      </ContainerLet>
    </Container>
  );
}

export default ContainerDay;