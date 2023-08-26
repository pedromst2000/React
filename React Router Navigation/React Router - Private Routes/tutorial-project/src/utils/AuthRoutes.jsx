import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let userIsLogged = { logged: false };

  return userIsLogged.logged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
