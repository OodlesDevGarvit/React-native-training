import React from "react";
import { View, Text } from "react-native";

const Home = (props) => {
  // console.warn(props.route.params);
  const {name, age} = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Text style={{ fontSize: 30 }}>Name : {name}</Text>
      <Text style={{ fontSize: 30 }}>Age : {age}</Text>
    </View>
  );
}

export default Home;