import React, { Component } from 'react';
import { render } from 'react-dom';

const App = () => {
  return <h1>Selamat Datang di React Tube</h1>;
};

render(
  <App />,
  document.querySelector('.container')
);
