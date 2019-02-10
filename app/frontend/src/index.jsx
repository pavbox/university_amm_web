import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container';
import Button from './components/Button';
import Table from './components/Table';

ReactDOM.render(
  <div>
    <h1>bobby</h1>
    <Container />
    <Table name="pbx row" />
    <Button value="click" />
  </div>,
  document.getElementById('root'),
);
