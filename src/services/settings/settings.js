import { Text, View } from "react-native";
import { SafeArea } from "../../components/safe-area";
import { Avatar, Button, List } from "react-native-paper";
import { useContext } from "react";
import { AuthContext } from "../auth/auth.context";
import styled from "styled-components";

const AvatarContainer = styled.View`
  align-items: center;
  gap: 20px;
`;

export const Settings = () => {
  const { onLogout, user } = useContext(AuthContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon icon={"human"} size={200} backgroundColor="#4840CA" />

        <Text>{user?.email}</Text>
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
