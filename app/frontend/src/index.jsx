import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './main.styl';

import store from './store/store';

import Container from './components/Container';
// import Button from './components/Button';
import Table from './components/Table';
// import Link from './components/Link';

ReactDOM.render(
  <div>
    <Container>
      <h1>Расписание</h1>
      <Table rowItem={store.getState()} />
    </Container>
  </div>,
  document.getElementById('root'),
);
