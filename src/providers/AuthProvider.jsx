import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, reload, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);

const googleProvider=new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const auth =getAuth(app);

const AuthProvider = ({children}) => {
    // const [reload,setReload]=useState(false);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const signInWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
        // third bracket e reload hobe
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        // setReload,
        updateUserProfile,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        signIn
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;








// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import { Children, createContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types';
// // import { signOut } from "firebase/auth/cordova";


// export const AuthContext = createContext(null);

// const googleProvider = new GoogleAuthProvider();

// const auth = getAuth(app);

// const AuthProvider = ({ Children }) => {
//     const [user, setUser] = useState(null);

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () => {
//         return signOut(auth);
//     }

//     const signInWithGoogle = () => {
//         return signInWithPopup(auth, googleProvider);
//     }


   
//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log('use in the auth state changed', currentUser);
//             setUser(currentUser);
//         });
//         return () => {
//             unSubscribe();
//         }
//     }, [])



//     const authInfo = {
//         user,
//         createUser,
//         signInWithGoogle,
//         signIn,
//         logOut
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {Children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// AuthProvider.propTypes = {
//     Children: PropTypes.node
// }