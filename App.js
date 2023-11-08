import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


// const DATA = [
//   {
//     id: '01',
//     title: 'First Item',
//   },
//   {
//     id: '02',
//     title: 'Second Item',
//   },
//   {
//     id: '03',
//     title: 'Third Item',
//   },
//   {
//     id: '04',
//     title: 'Fourth Item',
//   },
//   {
//     id: '05',
//     title: 'fifth Item',
//   },
//   {
//     id: '06',
//     title: 'sixth Item',
//   },
//   {
//     id: '07',
//     title: 'seventh Item',
//   },
//   {
//     id: '08',
//     title: 'eightth Item',
//   },
//   {
//     id: '09',
//     title: 'ninth Item',
//   },
//   {
//     id: '10',
//     title: 'Tenth Item',
//   },
//   {
//     id: '11',
//     title: 'eleventh Item',
//   },
//   {
//     id: '12',
//     title: 'Twelvth Item',
//   },
//   {
//     id: '13',
//     title: 'Thirteen Item',
//   },
//   {
//     id: '14',
//     title: 'fourteen Item',
//   },
//   {
//     id: '15',
//     title: 'fifteen Item',
//   },
// ];





const App = () => {

  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch("https://api.sampleapis.com/coffee/iced");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  const Item = (title , description) => {

    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  }
  const renderItem = (item , index) => {
    <Item title={item.title} description={item.description} index={index}/>
  }
  return (
    <View  style={styles.main}>
    <FlatList 
    data = {data}
     renderItem={renderItem}
    />

    </View>
  );
}


const styles = StyleSheet.create({
  // main: {
  // flex:1
  // }

})


export default App;
