
import React from 'react';
import PropTypes from 'prop-types';
import './Button.styl';

const propTypes = {
  value: PropTypes.string.isRequired,
};

class Button extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <button type="button" className="button" value={value}>
        {value}
      </button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
