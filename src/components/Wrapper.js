import './Wrapper.css'

const Wrapper = ({values}) => {
    var result='hhhhhhhh';
    try {
        console.log('inside wrapper');
        result = <div className=''>
        wrapper is {values}
    </div>
    } catch (error) {
        console.error('error in wrapper ----> '+error);
    }
    return result;
}

export default Wrapper;

