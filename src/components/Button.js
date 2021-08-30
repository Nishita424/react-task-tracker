import PropTypes from 'prop-types';

const Button = ({ name, color, bgColor, onClick }) => {
  return (
    <button style={{backgroundColor: bgColor, color: color}} className="rounded px-2 py-1" onClick={onClick}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  bgColor: 'gray',
  color: 'black'
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
