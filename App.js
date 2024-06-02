import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useState, useEffect } from "react";

import { theme } from "./src/infrastructure/theme";
import { AuthContextProvider } from "./src/services/auth/auth.context";
import { Navigation } from "./src/infrastructure/navigator/navigation";
import { Button, Text } from "react-native";

export default function App(props) {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>

      <StatusBar style="auto" />
    </>
  );
}
