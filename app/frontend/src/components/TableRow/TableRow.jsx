
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
          <div className="table__name">{name}</div>
          <div className="table__subject">{subject}</div>
          <div className="table__time">{time}</div>
        </div>
      </div>
    );
  }
}

TableRow.propTypes = propTypes;

export default TableRow;
