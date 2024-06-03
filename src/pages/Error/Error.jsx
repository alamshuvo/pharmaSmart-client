
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
          <Link to={"/"}>  <button className='text-primary text-2xl font-bold flex justify-center items-center gap-2 border-b-3'>Go Home <FaHome className='md:text-4xl'></FaHome></button></Link>
                <img className='min-h-20' src="https://i.ibb.co/Wk6g1m6/7967788-3819740.jpg" alt="" />
                
            </div>
        </div>
    );
};

export default Error;