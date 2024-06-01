import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";

export const CompactImage = styled.Image`
  width: 100%;
`;

export const AuthFormContainer = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  top: 25%;
  width: 100%;
  border-radius: 40px 40px 0 0;
  overflow: hidden;
`;

export const AuthBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/Rectangle 1.png"),
})`
  padding: 20px 40px;
  flex: 1;
  gap: 40px;
`;

export const AuthText = styled.Text`
  color: #959395;
  font-size: 12px;
  letter-spacing: 1.5px;
`;
export const AuthTitle = styled.Text`
  color: #fff;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const AuthTitleContainer = styled.View`
  align-items: center;
`;

export const AuthTextInput = styled(TextInput).attrs({
  textColor: "#959395",
  outlineColor: "#333",
  activeOutlineColor: "#7B53A8",
  cursorColor: "#7B53A8",
})`
  background-color: #151316;
  border-radius: 20px;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const AuthLabel = styled.Text`
  color: #959395;
`;

export const AuthFormGroup = styled.View`
  gap: 10px;
`;

export const AuthForm = styled.View`
  gap: 20px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: "#7B53A8",
})`
  border-radius: 10px;
  padding: ${(props) => props.theme.space.sm};
`;
export const AuthProviderButton = styled(Button).attrs({
  buttonColor: "#423DAC",
})`
  border-radius: 10px;
  padding: ${(props) => props.theme.space.sm};
`;

export const AuthProviderButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const AuthSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AuthSectionText = styled.Text`
  color: white;
`;

export const HorizontalLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: #555;
`;

export const HorizontalLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
`;

export const AuthError = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
`;
