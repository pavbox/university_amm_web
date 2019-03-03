
import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.styl';

const propTypes = {
  name: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

class TableRow extends React.PureComponent {
  render() {
    const { name, subject, time } = this.props;
    return (
      <div className="table__row">
        <div>
          <div>{name}</div>
          <div>{subject}</div>
          <div>{time}</div>
        </div>
      </div>
    );
  }
}

TableRow.propTypes = propTypes;

export default TableRow;
