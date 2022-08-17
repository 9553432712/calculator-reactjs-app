import './ButtonBox.css'

const ButtonBox = ({ child }) => {
    return (
        <div className='buttonBox'>
            button box is {child}
        </div>
    );
};

export default ButtonBox;