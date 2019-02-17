import React from 'react';
import PropTypes from 'prop-types';

import './Container.styl';

const propTypes = {
  children: PropTypes.node.isRequired,
};

// how to implement multiple style container?
class Container extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        {children}
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
