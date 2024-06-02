import  { useContext } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';

const UseAuth = () => {
        const auth=useContext(AuthContext);
        return auth

};

export default UseAuth;