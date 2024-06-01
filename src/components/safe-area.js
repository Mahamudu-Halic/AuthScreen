import { StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components"

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    background: white;
    ${StatusBar?.currentHeight && `padding-top: ${StatusBar?.currentHeight}px`};
`