import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic=UseAxiosPublic()

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // goggle sign in

  const gogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // update profile 
const updateUserProfile=(name,img)=>{
    return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: img,
      })
}



useEffect(()=>{
    const unsubscrive=  onAuthStateChanged(auth,curentUser=>{
          setUser(curentUser);
          console.log("curent user",curentUser);
          const userInfo={
              email:curentUser?.email
          }
          if (curentUser) {
              axiosPublic.post("/jwt",userInfo)
              .then(res=>{
                  if (res.data.token) {
                      localStorage.setItem("access_token",res.data.token)
                  }
              })
          }
          else{
              // todo remove token if token store client side 
              localStorage.removeItem("access_token")
          }
          setLoading(false)
  
      });
      return ()=>{
          unsubscrive
      }
  },[axiosPublic])
  
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    gogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        
    </AuthContext.Provider>
  );
};

export default AuthProvider;
