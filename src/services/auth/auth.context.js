import React, { createContext, useEffect, useState } from "react";
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
import { GoogleSignin } from "@react-native-google-signin/google-signin";

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
    }
    return;
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

  const onGoogleLogin = async () => {
    // setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn().then((data) => {
        setIsAuthorized(true);
        setUser(data?.user);
        setError(null);
      });
    } catch (e) {
      // setIsLoading(false);
      setIsAuthorized(false);
      setUser(null);
      setError(e);
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
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "205321208045-o8j4u513e7373a1sopuku5mrkqm70778.apps.googleusercontent.com",
    });
    onGoogleLogin();
  }, []);

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
