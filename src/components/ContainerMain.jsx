import React from 'react';
import ContainerDay from './ContainerDay';
import Navbar from './Navbar';

function ContainerMain() {
  return (
    <div className="App">
      <Navbar />
      <ContainerDay />
    </div>
  );
}

export default ContainerMain;