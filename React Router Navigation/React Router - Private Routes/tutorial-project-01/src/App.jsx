import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [userLogged, setUserLogged] = React.useState(() => {

    const Logged = localStorage.getItem("loggedIn");

    return Logged ? JSON.parse(Logged) : true;
  });



  React.useEffect(() => {

    

    localStorage.setItem("loggedIn", JSON.stringify(userLogged));


  }, [userLogged]);

  return (
    <>
      <Navbar 
        isUserLoggedIn={userLogged}
        setIsUserLoggedIn={setUserLogged}
      />
      <Outlet />

    </>
  )
}

export default App;
