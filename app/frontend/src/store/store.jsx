import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const initialStore = { name: 'pavel', subject: 'math', time: 'monday' };
export default createStore(reducer, initialStore);
