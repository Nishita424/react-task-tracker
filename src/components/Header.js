import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddBtn }) => {
  return (
    <header className="flex justify-between items-center py-2">
      <h1 className="text-3xl font-serif">{title}</h1>
      <Button
        name={showAddBtn ? 'Close' : 'Add'}
        color="White"
        bgColor={showAddBtn ? 'Red' : 'Green'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'React App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
