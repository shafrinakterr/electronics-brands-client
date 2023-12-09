import { useContext } from "react";
import { AuthContext } from "../authprovider/Authporvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouters = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
       return <span className="loading loading-spinner loading-md"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouters;