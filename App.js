import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const App = () => {


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

const [data , setData] = useState("");

  const getApiData = async() => {

    const url = "http://192.168.1.41:3000/users";
    let  result  = await fetch(url);
    result = await result.json();
  setData(result);

  }

  useEffect(()=>{
    getApiData();
  },[])



  return (

    <View style={styles.main}>

      {/* // Post api Method
      <Text> Post API call</Text>
      <Button title="save data" onPress={() => saveApiData()} /> */}

      <Text style={{fontSize:20}}>Fetch Data from JSON Server API</Text>
      {
        data.length ?
        data.map((item) => <View style ={styles.box}>
         <Text style={{fontSize:20}}>{item.name}</Text>
         <Text style={{fontSize:20}}>{item.age}</Text>
         <Text style={{fontSize:20}}>{item.email}</Text>
         
        </View>)
        : null
      }



    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box:{
    padding:10,

  }
})

export default App;




