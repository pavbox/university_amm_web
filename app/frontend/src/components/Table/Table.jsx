import React from 'react';
import PropTypes from 'prop-types';
import './Table.styl';

import TableRow from '../TableRow';

const propTypes = {
  rowItem: PropTypes.shape.isRequired,
};

class Table extends React.PureComponent {
  render() {
    const { rowItem } = this.props;
    return (
      <div className="table">
        <TableRow name={rowItem.name} subject={rowItem.subject} time={rowItem.time} />
      </div>
    );
  }
}

Table.propTypes = propTypes;

export default Table;
