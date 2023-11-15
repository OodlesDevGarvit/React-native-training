import React from "react";
import { View, Text } from "react-native";

const Home = (props) => {
  // console.warn(props.route.params);
  // const {email , password} = props.route.params;
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text style={{ fontSize: 30 }}>Home Screen</Text>
  //     <Text style={{ fontSize: 30 }}>email: {props.route.params.email}</Text>
  //     <Text style={{ fontSize: 30 }}>password: {props.route.params.password}</Text>
  //   </View>
  // );




  if (props.route.params) {
    const { email, password } = props.route.params;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Home Screen</Text>
        {email && <Text style={{ fontSize: 30 }}>Email: {email}</Text>}
        {password && <Text style={{ fontSize: 30 }}>Password: {password}</Text>}
      </View>
    );
  } else {
    // Handle the case where props.route.params is undefined
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>No params received</Text>
      </View>
    );
  }
}

export default Home;