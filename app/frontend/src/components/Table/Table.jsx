import React from 'react';
import PropTypes from 'prop-types';
import './Table.styl';

const propTypes = {
  name: PropTypes.string.isRequired,
};

class Table extends React.PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className="table">
        <div className="table__row">{name}</div>
      </div>
    );
  }
}

Table.propTypes = propTypes;

export default Table;
