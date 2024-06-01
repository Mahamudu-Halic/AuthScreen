import { Button } from "react-native"
import { SafeArea } from "../../../components/safe-area"

export const LandingScreen = ({navigation}) => {
    return <SafeArea>
        <Button onPress={() => navigation.navigate("Login")} title="Log in" />
    </SafeArea>
}