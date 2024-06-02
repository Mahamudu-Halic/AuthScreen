import { Image, Platform, ScrollView, Text, View } from "react-native";
import { SafeArea } from "../../../components/safe-area";
import WebView from "react-native-webview";
import styled from "styled-components";
import { AuthSafeArea } from "../../../components/auth.safe-area";
import {
  ActivityIndicator,
  Button,
  Icon,
  IconButton,
  TextInput,
} from "react-native-paper";
import {
  AuthBackground,
  AuthButton,
  AuthError,
  AuthForm,
  AuthFormContainer,
  AuthFormGroup,
  AuthLabel,
  AuthProviderButton,
  AuthProviderButtonContainer,
  AuthSection,
  AuthSectionText,
  AuthText,
  AuthTextInput,
  AuthTitle,
  AuthTitleContainer,
  CompactImage,
  HorizontalLine,
  HorizontalLineContainer,
} from "../../../components/auth/auth.styled.components";
import { useContext, useState } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
// import signInIllustration from "../../../../assests/sign-in-illustration.png"
{
  /* <Button onPress={() => navigation.goBack()} title="home" /> */
}

export const SignInScreen = ({ navigation }) => {
  const { isLoading, onLogin, error, onGoogleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthSafeArea>
      <CompactImage
        source={require("../../../../assets/sign-in-illustration.png")}
      />
      <AuthFormContainer>
        <AuthBackground>
          <AuthTitleContainer>
            <AuthTitle>Welcome Back</AuthTitle>
            <AuthText>Welcome back we missed you</AuthText>
          </AuthTitleContainer>

          <ScrollView>
            <AuthForm>
              <AuthFormGroup>
                <AuthTextInput
                  label="Email"
                  mode="outlined"
                  left={<TextInput.Icon icon="email" color={"#959395"} />}
                  keyboardType={"email-address"}
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={setEmail}
                />
              </AuthFormGroup>
              <AuthFormGroup>
                <AuthTextInput
                  onChangeText={setPassword}
                  label="Password"
                  secureTextEntry={!showPassword}
                  textContentType="password"
                  autoCapitalize="none"
                  mode="outlined"
                  left={<TextInput.Icon icon="key" color={"#959395"} />}
                  right={
                    <TextInput.Icon
                      icon={!showPassword ? "eye-off" : "eye"}
                      color={"#959395"}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
                <Text
                  style={{ textAlign: "right", color: "#959395", fontSize: 12 }}
                >
                  Forgot Password?
                </Text>
              </AuthFormGroup>
              {error !== null && <AuthError>Error: {error}</AuthError>}
              {!isLoading ? (
                <AuthButton
                  mode="contained"
                  onPress={() => onLogin(email, password)}
                >
                  Sign in
                </AuthButton>
              ) : (
                <ActivityIndicator
                  size={20}
                  animating={isLoading}
                  color="tomato"
                />
              )}

              <HorizontalLineContainer>
                <HorizontalLine />
                <Text style={{ color: "white" }}>or</Text>
                <HorizontalLine />
              </HorizontalLineContainer>

              <AuthProviderButtonContainer
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <AuthProviderButton onPress={onGoogleLogin}>
                  <Icon source={"google"} size={25} color="white" />
                </AuthProviderButton>
                <AuthProviderButton>
                  <Icon source={"apple"} size={25} color="white" />
                </AuthProviderButton>
                <AuthProviderButton>
                  <Icon source={"facebook"} size={25} color="white" />
                </AuthProviderButton>
              </AuthProviderButtonContainer>
              <AuthSection
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AuthSectionText>Don't have an account?</AuthSectionText>
                <Button onPress={() => navigation.navigate("Register")}>
                  Sign up
                </Button>
              </AuthSection>
            </AuthForm>
          </ScrollView>
        </AuthBackground>
      </AuthFormContainer>
    </AuthSafeArea>
  );
};
