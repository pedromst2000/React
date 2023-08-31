import { createContext, useState , useEffect } from "react";
import usersData from "../data/users.json";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  // save the user state in the sessionStorage
  const [user, setUser] = useState(() => {

    const sessionUser = sessionStorage.getItem("user");
    return sessionUser ? JSON.parse(sessionUser) : {
      username: "",
      password: "",
      isLogged: false,
      role: "",
    };

  }
); 

useEffect(() => {
  

  const encryptPassword = (password) => {

    // encrypt the password with the Caesar Cipher algorithm
    const encryptedPassword = password
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 3))
      .join("");

    return encryptedPassword;

  };



  // encrypt the password
  const encryptedPassword = encryptPassword(user.password);


  // save the state of the user in the localStorage
  sessionStorage.setItem("user", JSON.stringify({
    username: user.username,
    password: encryptedPassword,
    isLogged: user.isLogged,
    role: user.role,
  }));

}, [user.password, user.username, user.isLogged, user.role]);



  // In this tutorial we will use the username and password from the users.json file to manage the login for checking the username and password

  // !! Usually we would do a call to the authtentication API to check the username and password and get the token for the user

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // find the user in the users.json file
      const userFound = usersData.find(
        (user) => user.username === username 
      );

      // if are empty fields
      if (username === "" || password === "") {
        reject("Please fill all the fields");
      }

      // if the username is not found
      if (!userFound) {
        reject("User not found");
      }

      // if the password is incorrect
      if (userFound && userFound.password !==  password) {
        reject("Password incorrect");
      }

      //if the user is admin
      else if (userFound && userFound.role === "admin") {

        // save the state of the user
        setUser({

          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          role: userFound.role, // admin
        });

        resolve("sucess"); // resolve the promise

      }

      //if the user is not admin
      else if (userFound && userFound.role === "regular") {
        setUser({
          username: userFound.username,
          password: userFound.password,
          isLogged: true,
          role: userFound.role, // regular
        });
        resolve("sucess"); // resolve the promise
      }
    });
  };

  const logout = () => {
    setUser({
      username: "",
      password: "",
      isLogged: false,
      role: "",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
