import PropTypes from 'prop-types';

const Button = ({ name, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: 'greenyellow',
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
