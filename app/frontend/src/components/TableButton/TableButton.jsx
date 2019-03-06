
import React from 'react';
import PropTypes from 'prop-types';
import './TableButton.styl';

const propTypes = {
  value: PropTypes.string.isRequired,
};

class TableButton extends React.PureComponent {
  render() {
    const { value } = this.props;
    return <button type="button" className="table__button">{value}</button>;
  }
}

TableButton.propTypes = propTypes;

export default TableButton;
