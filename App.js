import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/infrastructure/navigator/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { AuthContextProvider } from "./src/services/auth/auth.context";
import { Sample1 } from "./src/services/sample1/sample1";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppNavigator } from "./src/infrastructure/navigator/app.navigator";

export default function App(props) {
  const Tab = createBottomTabNavigator();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});
