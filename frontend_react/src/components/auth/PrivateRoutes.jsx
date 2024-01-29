import { Navigate,Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const isUserSignedIn = !!localStorage.getItem("token");
    
    return (
        <>
        {
            isUserSignedIn ? <Outlet/> : <Navigate to="/login"/>
        }
        </>
    )
}

export default PrivateRoutes