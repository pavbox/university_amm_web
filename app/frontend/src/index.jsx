import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './main.styl';

import Container from './components/Container';
import Button from './components/Button';
import Table from './components/Table';

ReactDOM.render(
  <div>
    <Container>
      <h1>Расписание</h1>
      <Table name="Новый день" />
      <Button value="action" />
    </Container>
  </div>,
  document.getElementById('root'),
);
