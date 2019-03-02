import React from 'react';
import PropTypes from 'prop-types';
import './Table.styl';

import TableRow from '../TableRow';


const propTypes = {
  name: PropTypes.string.isRequired,
};

class Table extends React.PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className="table">
        {name}
        <TableRow value="cell in table 1" />
        <TableRow value="cell in table 2" />
        <TableRow value="cell in table 3" />
      </div>
    );
  }
}

Table.propTypes = propTypes;

export default Table;
