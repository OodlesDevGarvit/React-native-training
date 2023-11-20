import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // const saveApiData = async () => {
  // const data = {
  //   name:"patrik",
  //   age:25,
  //   email:"pat123@gmail.com",
  //   id:89281
  // }
  //   const url = "192.168.11.42:3000/users";
  //   console.log("CALLING API")
  //   let result = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   })
  //   console.log("DONE CALLING")
  //   response = await result.json();
  //   console.log("RESPONSE", response);
  // console.log("test");
  // }
  const [data, setData] = useState("");

  const getApiData = async () => {

    const url = "http://192.168.1.41:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);

  }

  useEffect(() => {
    getApiData();
  }, [])


  const saveData = async() => {
    const url = "http://192.168.1.41:3000/users";
    const res = await fetch(url,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name,age,email})
    });
    let result= await res.json();
    if(result){
      console.warn("Data is Added")
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


      <TextInput
        placeholder="Enter your age"
        style={styles.TextBox}
        value={age}
        onChangeText={(text) => setAge(text)}

      />


      <TextInput
        placeholder="Enter your email"
        style={styles.TextBox}
        value={email}
        onChangeText={(text) => setEmail(text)}

      />

      <Button title="save data" onPress={saveData}/>


      {/* {
        data.length ?
        data.map((item) => <View style ={styles.box}>
         <Text style={{fontSize:20}}>{item.name}</Text>
         <Text style={{fontSize:20}}>{item.age}</Text>
         <Text style={{fontSize:20}}>{item.email}</Text>
        </View>)
        : null
      } */}



    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  TextBox:{
    borderColor:"skyblue",
    borderWidth:1,
    margin:20
  }
 
})

export default App;




