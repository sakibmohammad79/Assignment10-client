import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
    }
    return (
        <UserContext.Provider value={UserInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;