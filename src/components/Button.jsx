import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button className="btn">{name}</button>
);


Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: 'Click Me', // Default value
};

export default Button;
