
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index(){
    return(
        <View
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:"center"
        }}
        >
            <Text className="bg-blue-600 text-2xl">welcone</Text>

            <Link href="/sign-in">Sign In</Link>
        

        </View>
    )
}