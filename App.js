import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <View >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const Home = () => {
  return (
    <View style={{ flex: 1,  justifyContent: 'center', alignContent: 'center' }}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
}

const Login = (props) => {
  return (
    <View style={{ flex: 1,  justifyContent: 'center', alignContent: 'center' }}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button title="go to home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}

export default App;
