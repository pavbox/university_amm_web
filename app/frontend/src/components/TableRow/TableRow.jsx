
import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.styl';

const propTypes = {
  value: PropTypes.string.isRequired,
};

class TableRow extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <div className="table__row">
        <div className="table__col">
          {value}
        </div>
      </div>
    );
  }
}

TableRow.propTypes = propTypes;

export default TableRow;
