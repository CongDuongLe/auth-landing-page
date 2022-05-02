import { useContext, createContext, useState, useEffect} from "react";
import { GoogleAuthProvider,
         signInWithPopup, 
         signOut,onAuthStateChanged
        } from "firebase/auth";
import { auth } from "../firebase-config";
const AuthContext = createContext({})
export const AuthContextProvider = ({children}) => { 
    const [user, setUser] = useState({})
    const googleSignIn = () => {
        const Provider = new GoogleAuthProvider();
        signInWithPopup(auth, Provider)
    }
    const SignOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('User', currentUser)
        });
        return () => {
          unsubscribe();
        };
      }, []);


    return (
        <AuthContext.Provider value={{googleSignIn, SignOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}