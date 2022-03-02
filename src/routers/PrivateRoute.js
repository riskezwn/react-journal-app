import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({isLoggedIn, children}) => { 
    return isLoggedIn ? children : <Navigate to="/auth" />;
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
};