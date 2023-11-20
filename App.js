import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("false");
  const [ageError, setAgeError] = useState("false");
  const [emailError, setEmailError] = useState("false");



  const saveData = async () => {

    if (!name) {
      setNameError(true);
    }else{
      setNameError(false);
    }

    if(!age){
      setAgeError(true);
    }else{
      setAgeError(false);
    }

    if(!email){
      setEmailError(true);
    }else{
      setEmailError(false);
    }

    if (!name || !age || !email) {
      return (false);
    }

    const url = "http://192.168.1.41:3000/users";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name, age, email })
    });
    let result = await res.json();
    if (result) {
      console.warn("Data is saved");
    }
  }




  return (

    <View style={styles.main}>



      <Text style={{ fontSize: 20 }}>Post API with Input Field Data</Text>

      <TextInput
        placeholder="Enter your name"
        style={styles.TextBox}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ?
        <Text>please enter valid name</Text>
        : null
      }

      <TextInput
        placeholder="Enter your age"
        style={styles.TextBox}
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {ageError ?
        <Text>please enter valid age</Text>
        : null
      }

      <TextInput
        placeholder="Enter your email"
        style={styles.TextBox}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ?
        <Text>please enter valid email</Text>
        : null
      }


      <Button title="save data" onPress={saveData} />


    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  TextBox: {
    borderColor: "skyblue",
    borderWidth: 1,
    margin: 20
  }

})

export default App;




