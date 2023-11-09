import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"


const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const results = await res.json();
    setData(results);
  }

  useEffect(() => {
    getData();
  }, [])

  const Item = ({ title, body }) => {
    return (
      <View style={styles.item}>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>

    );
  }

  const renderItem = ({ item }) => {
    return (
      <Item title={item.title} body={item.body} />
    );
  }
  const list = useRef(null);

  const Press = () => {
    list.current.scrollToEnd({ animated: true });
  }

  const Header = () => {
    return (
      <View style={styles.Header}>
        <Text style={{ fontSize: 30 }}>Rendering list using FlatList</Text>
        <Button onPress={()=> Press()} title="Go to end"/>
      </View>
    
    );
  }

  const Footer = () => {
    return (
      <View style={styles.Footer}>
        <Text style={{ fontSize: 30 }}>Footer Element</Text>
      </View>
    );
  }



  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatlistContainer}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
        ref={list}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16
  },
  item: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'lightgreen'
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  Header: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 10
  },
  Footer: {
    backgroundColor: 'lightcoral',
    padding: 10,
    marginTop: 10,
  },

})


export default App;
