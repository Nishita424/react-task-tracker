import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Click');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button name="Add" color="Green" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Default',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
