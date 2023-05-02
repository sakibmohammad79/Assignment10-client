import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const UserContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider;
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider;
    const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            return setUser(currentUser);
        })
        return () =>{
            return unsubscibe();
        }
    },[]);

    const UserInfo = {
        user,
        registerUser,
        logUser,
        logOut,
        googleSignIn,
        githubSignIn,
    }
    return (
        <UserContext.Provider value={UserInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;