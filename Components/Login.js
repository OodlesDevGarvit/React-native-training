import React, { useState } from "react";
import { View, Text ,Button, TextInput} from "react-native";

const Login = (props) => {
 
  const [name,setName]=useState("");
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput
        placeholder="Enter name"
        onChangeText={(text)=>setName(text)}
      />
      <Button title="go to home" 
      onPress={() => props.navigation.navigate("Home",{name})} 
      />
    </View>
  );
}
export default Login;