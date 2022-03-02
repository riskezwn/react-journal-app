import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isLoggedIn, children }) => {
    return !isLoggedIn ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired,
};
