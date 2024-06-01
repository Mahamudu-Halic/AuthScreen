import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "./auth-navigator";
import { useContext } from "react";
import { AuthContext } from "../../services/auth/auth.context";
import { AppNavigator } from "./app.navigator";
import { Sample1 } from "../../services/sample1/sample1";

export const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  return isAuthorized ? <AppNavigator /> : <AuthNavigator />;
};
