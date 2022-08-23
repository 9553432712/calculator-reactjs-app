import './Wrapper.css'

const Wrapper = (props) => {
    var result='hhhhhhhh';
    try {
        console.log('inside wrapper');
        result = <div className='wrapper'>
        {props.children}
    </div>
    } catch (error) {
        console.error('error in wrapper ----> '+error);
    }
    return result;
}

export default Wrapper;

