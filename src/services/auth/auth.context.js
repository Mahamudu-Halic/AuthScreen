import React, { createContext, useState } from "react";
import {
  googleLoginRequest,
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./auth.service";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    if (!email.trim().length || !password.trim().length) {
      setError("Error: Please fill in all required fields");
      setIsLoading(false);
      return null;
    }
    try {
      loginRequest(email, password)
        .then((result) => {
          setUser(result);
          setIsAuthorized(true);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.code);
          setIsLoading(false);
        });
    } catch (err) {}
  };

  const onGoogleLogin = () => {
    try {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const u = result.user;
          console.log(u);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log("ErrorCode: ", errorCode);
          const errorMessage = error.message;
          console.log("ErrorMessage: ", errorMessage);
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = (email, password, confirmPassword) => {
    setIsLoading(true);
    if (
      !email.trim().length ||
      !password.trim().length ||
      !confirmPassword.trim().length
    ) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return null;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match");
      setIsLoading(false);
      return null;
    }
    try {
      registerRequest(email, password)
        .then((result) => {
          setUser(result);
          setIsAuthorized(true);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.code);
          setIsLoading(false);
        });
    } catch (err) {}
  };

  const onLogout = () => {
    setUser(null);
    setIsAuthorized(false);
    signOutRequest();
  };

  const value = {
    user,
    isLoading,
    error,
    isAuthorized,
    onLogin,
    onRegister,
    onLogout,
    onGoogleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
