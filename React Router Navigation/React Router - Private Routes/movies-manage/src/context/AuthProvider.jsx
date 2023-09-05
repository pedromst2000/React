import React,{createContext, useEffect, useState} from 'react'
import usersData from '../data/users.json'
import validEmail from '../utils/validEmail';
import {usersNewData} from '../utils/protectUsers';


const AuthContext = createContext({});

export function AuthProvider({children}) {

    
    const [users, setUsers] = useState(()=>{

        const localUsers = localStorage.getItem('users');

        return localUsers ? JSON.parse(localUsers) : usersNewData;


    });

    // session of the user info for the app
    const [User, setUser] = useState(()=>{

    const loggedUser = sessionStorage.getItem('loggedUser');

    return loggedUser ? JSON.parse(loggedUser) : {
        username:"",
        role: "",
        isLogged: false,
    };
  });
  

  useEffect(() => {

    sessionStorage.setItem('loggedUser', JSON.stringify({
        username: User.username,
        role: User.role,
        isLogged: User.isLogged,
    }));


    localStorage.setItem('users', JSON.stringify(users));


  }, [User.username, User.role, User.isLogged, users]);


    const login = (email, password) => {
        return new Promise((resolve, reject) => {
        
            const user = usersData.find((user) => user.email === email && user.password === password);
          

            if(email == "" || password == ""){
                reject("Email or password are empty");
            }

            if(!validEmail(email)){
                reject("Email is not valid");
            }

        if(!user) {
            console.log(user);
            reject("incorrect credentials");
        }

            setUser({
                username: user.username,
                role:  user.role,
                isLogged: true
            });

            resolve("user logged successfully");
            
        });
    };


    const register = (username, email, password, confirmPassword) => {
        return new Promise((resolve, reject) => {
             
            if(username == "" || email == "" || password == "" || confirmPassword == ""){
                reject("All fields are required");
            }

            if(!validEmail(email)){
                reject("Email is not valid");
            }

            if(password !== confirmPassword){
                reject("Passwords do not match");
            }

            const user = usersData.find((user) => user.email === email);

            if(user){
                reject("Email already exists");
            }

            const newUser = {
                username,
                email,
                password,
                role: "user",
            };

            setUsers([...users, newUser]);

            setUser({
                username,
                role: "user",
                isLogged: true
            });

            resolve("user registered successfully");


        });
    };


    const logout = () => {
        setUser({
            username: "",
            role: "",
            isLogged: false
        });
    };

  
    return (
        <AuthContext.Provider value={{User, login, register, logout, users}}>
            {children}
        </AuthContext.Provider>
        )
}


export default AuthContext;
