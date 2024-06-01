import { Text } from "react-native";
import { SafeArea } from "../../components/safe-area";
import { useContext } from "react";
import { AuthContext } from "../auth/auth.context";

export const Sample1 = () => {
  // const { user } = useContext(AuthContext);
  // console.log("fggh", user);
  return (
    <SafeArea>
      <Text>Sample 1</Text>
    </SafeArea>
  );
};
