import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ allowedRole }) => {
    const token = localStorage.getItem("access");

    if (!token) return <Navigate to="/login" replace />;

    let isAuthorized = false;
    try {
        const decoded = jwtDecode(token);
        if (!allowedRole || decoded.role === allowedRole) {
            isAuthorized = true;
        }
    } catch (err) {
        console.log("Decode error:", err);
    }

    if (!isAuthorized) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
