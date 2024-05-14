import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";


  import { GoogleAuthProvider } from "firebase/auth";
  import { GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config.js";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
  
  export const AuthContext = createContext(null);
  
  //social auth provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //update profile
 
  const auth = getAuth(app);
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //create user
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);

        if(currentUser){
          const loggedUser ={email : currentUser.email}
          axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials : true})
          .then(res => {
            console.log('token user',res.data)
          })
        }
      });
      return () => {
        unsubscribe();
      };
    }, []);
    //sign out
    const logOut = () => {
      setLoading(false);
      return signOut(auth);
    };
    //Sign in
  
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    //goggle login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    //github login
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
  
    const authInfo = {
    user,
      loading,
      createUser,
      logOut,
      logIn,
      googleLogin,
      githubLogin,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  