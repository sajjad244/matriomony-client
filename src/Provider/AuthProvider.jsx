/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

//! for google sign in
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  //  Create new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   updateUser profile

  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  //  google sign in

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Change Password
  const changeUserPassword = async (currentPassword, newPassword) => {
    setLoading(true);

    if (!user) throw new Error("User not logged in");

    // Google login users can't change password
    if (user.providerData[0].providerId !== "password") {
      setLoading(false);
      throw new Error("Google login user cannot change password");
    }

    try {
      // reauthenticate
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );
      await reauthenticateWithCredential(user, credential);

      //  update password
      await updatePassword(user, newPassword);

      setLoading(false);
      return true; // success
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // !!!!---------->>>>> [TOKEN -jwt]
      if (currentUser) {
        // get token and store it client site [cookies]
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
        });
      } else {
        // remove token when user is not logged in
        localStorage.removeItem("token");
      }
      // !!!!---------->>>>> [TOKEN -jwt]
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createNewUser,
    loginUser,
    logOut,
    updateUserProfile,
    googleLogIn,
    changeUserPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
