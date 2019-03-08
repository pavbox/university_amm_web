import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import 'normalize.css';
import './main.styl';

import Container from './components/Container';
// import Button from './components/Button';
import Table from './components/Table';
// import Link from './components/Link';

const store = createStore();

ReactDOM.render(
  <div>
    <Container>
      <h1>Расписание</h1>
      <Table rowItem={{ name: 'pavel', subject: 'math', time: 'monday' }} />
    </Container>
  </div>,
  document.getElementById('root'),
);
