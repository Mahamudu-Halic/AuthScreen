import { ScrollView, Text } from "react-native";
import { AuthSafeArea } from "../../../components/auth.safe-area";
import { ActivityIndicator, Button, Icon, TextInput } from "react-native-paper";
import {
  AuthBackground,
  AuthButton,
  AuthError,
  AuthForm,
  AuthFormContainer,
  AuthFormGroup,
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

export const SignUpScreen = ({ navigation }) => {
  const { isLoading, onRegister, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthSafeArea>
      <CompactImage
        source={require("../../../../assets/sign-up-illustration.png")}
      />
      <AuthFormContainer>
        <AuthBackground>
          <AuthTitleContainer>
            <AuthTitle>Get Started Free</AuthTitle>
            <AuthText>Free Forever. No Credit Card Needed</AuthText>
          </AuthTitleContainer>

          <ScrollView>
            <AuthForm>
              <AuthFormGroup>
                <AuthTextInput
                  label="Email"
                  left={<TextInput.Icon icon="email" color={"#959395"} />}
                  mode="outlined"
                  keyboardType={"email-address"}
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={setEmail}
                />
              </AuthFormGroup>
              {/* Get back later */}
              {/* <AuthFormGroup>
                <AuthLabel>Your Name</AuthLabel>
                <AuthTextInput
                  label="@yourname"
                  left={<TextInput.Icon icon="account" color={"#959395"} />}
                  mode="outlined"
                />
              </AuthFormGroup> */}
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
              </AuthFormGroup>
              <AuthFormGroup>
                <AuthTextInput
                  onChangeText={setConfirmPassword}
                  label="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  textContentType="password"
                  autoCapitalize="none"
                  mode="outlined"
                  left={<TextInput.Icon icon="key" color={"#959395"} />}
                  right={
                    <TextInput.Icon
                      icon={!showConfirmPassword ? "eye-off" : "eye"}
                      color={"#959395"}
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  }
                />
              </AuthFormGroup>
              {error !== null && <AuthError>Error: {error}</AuthError>}
              {!isLoading ? (
                <AuthButton
                  mode="contained"
                  onPress={() => onRegister(email, password, confirmPassword)}
                >
                  Sign up
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
                <AuthProviderButton>
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
                <AuthSectionText>Already have an account?</AuthSectionText>
                <Button onPress={() => navigation.navigate("Login")}>
                  Sign in
                </Button>
              </AuthSection>
            </AuthForm>
          </ScrollView>
        </AuthBackground>
      </AuthFormContainer>
    </AuthSafeArea>
  );
};
