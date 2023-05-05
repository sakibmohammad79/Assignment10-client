import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const UserContext = createContext(null);
const AuthProvider = ({children}) => {
    const [load, setLoad] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider;
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider;
    const githubSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
        })
        return () =>{
            return unsubscibe();
        }
    },[load]);

    const UserInfo = {
        user,
        registerUser,
        logUser,
        logOut,
        googleSignIn,
        githubSignIn,
        loading, 
        setLoad,
    }
    return (
        <UserContext.Provider value={UserInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;