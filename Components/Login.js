import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";

const Login = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <View style={styles.main}>

      <View style={styles.inputview}>
        <TextInput
          style={styles.TextInput}
          placeholder=" Email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputview}>
        <TextInput
          style={styles.TextInput}
          placeholder=" Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotbutton}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
        <Text style={styles.loginbtn}>LOGIN</Text>
      </TouchableOpacity>
      


    </View>


  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputview: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 25,
    alignItems: 'center'
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },
  forgotbutton: {
    height: 50,
    narginBottom: 20,
  },
  loginbtn: {
    backgroundColor: "#FF1493",
    width: "70%",
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    // justifyContent:'center',

  },
}
);

export default Login;