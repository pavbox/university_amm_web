import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

class Link extends React.PureComponent {
  render() {
    const { href, text } = this.props;
    return (
      <a href={href}>{text}</a>
    );
  }
}

Link.propTypes = propTypes;

export default Link;
