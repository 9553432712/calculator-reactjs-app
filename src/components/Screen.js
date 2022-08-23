import '../style/Screen.css'


const Screen = ({ value }) => {
    var result='hhhhhhhh';
    try {
        // console.log('inside Screen');
        result = <div className='screen'>
        {value}
    </div>
    } catch (error) {
        console.error('error in Screen ----> '+error);
    }
    return result;
  };

export default Screen;