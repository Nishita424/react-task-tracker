import React from 'react';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddBtn }) => {
  const location = useLocation();
  return (
    <header className="flex justify-between items-center py-2">
      <h1 className="text-3xl font-serif">{title}</h1>
      {
        location.pathname === '/' && 
        <Button
          name={showAddBtn ? 'Close' : 'Add'}
          color="White"
          bgColor={showAddBtn ? '#e50000' : 'Green'}
          onClick={onAdd}
        />
      }
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
