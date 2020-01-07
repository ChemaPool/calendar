import React from 'react';
import Navbar from './Navbar';
import ContainerDay from './ContainerDay';

function ContainerMain() {
  return (
    <div className="App">
      <Navbar />
      <ContainerDay />
    </div>
  );
}

export default ContainerMain;