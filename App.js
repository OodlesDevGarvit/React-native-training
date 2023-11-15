import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="SignUp" component={SignUp}/>
        <Tab.Screen name="PopUp" component={PopUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

const SignUp = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
}

const PopUp = () => {
  return(
<View>
  <Text>PopUp</Text>
</View>
  );
}


export default App;
