import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {

  const Stack = createNativeStackNavigator();

  const addBtn = ()=>{
    console.warn("btn is called");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:"blue",
          },
          headerTintColor:"orange",
          headerTitleStyle:{
            fontSize:25
          }
        }} >
        <Stack.Screen name="Login" component={Login}  
        options={{
          headerTitle:()=><Button title="left" onPress={addBtn}/>,
          headerRight:()=><Header />,
          headerStyle:{
            backgroundColor:"blue",
          },
          headerTintColor:"white",
          headerTitleStyle:{
            fontSize:40
          }
        }}  
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}





export default App;
