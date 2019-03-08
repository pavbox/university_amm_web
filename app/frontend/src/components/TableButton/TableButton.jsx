
import React from 'react';
import PropTypes from 'prop-types';
import './TableButton.styl';

const propTypes = {
  value: PropTypes.string.isRequired,
};

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch({ type: 'SWITCH_TABLE', payload: { isOn: true } });
}

class TableButton extends React.PureComponent {
  render() {
    const { value } = this.props;
    return <button type="button" className="table__button" onClick={dispatchBtnAction}>{value}</button>;
  }
}

TableButton.propTypes = propTypes;

export default TableButton;
