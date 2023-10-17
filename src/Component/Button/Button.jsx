import PropTypes from 'prop-types';

const Button = ({ text, className }) => {
  return <button className={` w-[112px] h-[42px] border-4 rounded-xl border-black ${className}`}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;