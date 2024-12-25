import { Link } from "expo-router";
import { View } from "react-native";

export default function Index(){
    return(
        <View
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:"center"
        }}
        >

            <link href="/sign-in">Sign In</link>
            <link href="/sign-in">Explore</link>
            <link href="/sign-in">profile</link>

        </View>
    )
}