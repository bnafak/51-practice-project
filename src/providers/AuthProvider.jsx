import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  
  const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
//observe auth state change
  useEffect(()=>{
    const unSubscrive = onAuthStateChanged(auth, currentUser => { 
        console.log('Observing current user inside useEffect of AuthProvider', currentUser)
        setUser(currentUser);
        setLoading(false);

    });
    return () =>{
        unSubscrive();
    }
  }, [])

  const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }; //createUser যে কোন জায়গা থেকে ব্যবহার করা যাবে
  
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  optionalNode: PropTypes.node
};
