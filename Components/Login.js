import React from "react";
import { View, Text ,Button} from "react-native";

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Button title="go to home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}
export default Login;