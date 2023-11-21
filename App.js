import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";

const App = () => {

  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "http://192.168.1.41:3000/users";
    // const url = "https://dummyjson.com/products/1";

    const res = await fetch(url);
    const result = await res.json();

    setData(result);
  }

  const deleteUser = async (id) => {
    const url = `http://192.168.1.41:3000/users/${id}`;
    const res = await fetch(url,{
      method: "delete"
    });
    const result = await res.json();
    console.log(res,result,id);
    if (result) {
      console.warn("User deleted");
      getApiData();
    }
    
    
    
  }

  useEffect(() => {
    getApiData();
  }, [])


  return (

    <View style={styles.main}>

      <View style={styles.dataWrapper}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>Email</Text>
        <Button title="Delete" />
        <Button title="Update" />
      </View>

      {
        data.length ?

          // data.map((item) => (
          //   <View style={styles.dataWrapper}>
          //     <View sty><Text>{item.name}</Text></View>
          //     <View> <Text>{item.age}</Text></View>
          //     <View> <Text>{item.email}</Text></View>
          //     <TouchableOpacity onPress={()=>console.warn("btn is deleted")}>
          //     <View> <Text>Delete</Text></View>
          //     </TouchableOpacity>
          //     <TouchableOpacity onPress={()=>console.warn("btn is updated")}>
          //     <View><Text>Update</Text></View> 
          //     </TouchableOpacity>
          //   </View>))

          // <View>{
          //  data?.map(item=>{
          //   return(
          //     <View>
          //       <Text>{item?.name}</Text>
          //     </View>
          //   )
          //  })
          // }</View>


          data.map((item) => {
            return (
              <View style={styles.dataWrapper}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
                <Text>{item.email}</Text>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
                <Button title="Update" />

              </View>
            )
          })
          : null
      }

    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 8
  }




})

export default App;




