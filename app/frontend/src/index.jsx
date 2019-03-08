import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

import 'normalize.css';
import './main.styl';

import Container from './components/Container';
// import Button from './components/Button';
import Table from './components/Table';
// import Link from './components/Link';

const initialState = { name: 'pavel', subject: 'math', time: 'monday' };
const store = createStore(reducer, initialState);

ReactDOM.render(
  <div>
    <Container>
      <h1>Расписание</h1>
      <Table rowItem={store.getState()} />
    </Container>
  </div>,
  document.getElementById('root'),
);
