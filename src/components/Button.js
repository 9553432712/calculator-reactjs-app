import './Button.css'

const Button = ({ className, value, onClick }) => {
    // debugger;
    // console.log('inside Button js');
    return (
        <button className={className} onClick={onClick}>
          {value}
        </button>
      );
};

export default Button;