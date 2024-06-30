// firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// react
import { useState } from "react";

//redux

import { login } from "../app/userslice";
import { useDispatch } from "react-redux";

import React from "react";
import toast from "react-hot-toast";

function useRegister() {

  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const register = async (email, password, displayName, photoURL) => {
    console.log(photoURL);
    setIsPending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      const user = userCredential.user;
      setIsPending(false);
      dispatch(login(user));
      toast.success(`Welcome ${user.displayName} !`);
    } catch (error) {
      toast.error(error.message);
      setIsPending(false);
    }
  };
  
  return { isPending, register };
}

export default useRegister;
