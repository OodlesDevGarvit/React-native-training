import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet ,ScrollView } from "react-native";

const App = () => {

  const [data, setData] = useState([]);
console.log(data);
  //api call
  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
     result = await result.json();
     console.warn(result);
    setData(result);
  }

   useEffect(() => {
    getApiData();
   }, [])

  return (

    <ScrollView style={styles.main}>
      <Text>API Integration</Text>
       {
        data.length ?
          data.map((item)=>
          <View style={{fontSize:10 , padding:20 , marginBottom:2 , borderBottomColor:"#fff" , borderBottomWidth:2}}>
            <Text style={{backgroundColor:"#ddd"}}>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            </View>
          )
        : null     
      } 
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    fontSize: 20
  }
})

export default App;




