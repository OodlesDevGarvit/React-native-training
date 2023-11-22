import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Modal } from "react-native";

const App = () => {

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getApiData = async () => {
    const url = "http://192.168.11.42:3000/users";
    // const url = "https://dummyjson.com/products/1";

    const res = await fetch(url);
    const result = await res.json();
    // console.warn(props.selecteduser);
    setData(result);
  }

  const deleteUser = async (id) => {
    const url = `http://192.168.11.42:3000/users/${id}`;
    const res = await fetch(url, {
      method: "delete"
    });
    const result = await res.json();
    console.log(res, result, id);  // console.warn(props.selecteduser);
    if (result) {
      console.warn("User deleted");
      getApiData();
    } `http://192.168.11.42:3000/users/${id}`;
  }

  useEffect(() => {
    getApiData();
  }, [data])

  const updateUser = (data) => {
    setShowModal(true);
    setSelectedUser(data);
    // console.warn(selectedUser);
  }
  const updateModal = async () => {
    const url = `http://192.168.11.42:3000/users/${id}`;
    const res = await fetch(url, {
      method: "PUT"
    });
    const result = await res.json();

  }
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
          //     <View> <Text>Delet`http://192.168.11.42:3000/users/${id}`;e</Text></View>
          //     </TouchableOpacity>
          //     <TouchableOpacity onPress={()=>console.etShowModal(true);warn("btn is updated")}>
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
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            )
          })
          : null
      }

      <Modal visible={showModal} transparent={true}>
        <UserModal setshowmodal={setShowModal} selecteduser={selectedUser} />
      </Modal>
    </View>
  )
}
const UserModal = (props) => {
  // console.warn(props.selecteduser);
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {

    if (props.selecteduser) {
      setName(props.selecteduser.name);
      setAge(props.selecteduser.age.toString());
      setEmail(props.selecteduser.email);
    }
  }, [props.selecteduser]);

  const updateUserData = async () => {
    const dataBody = {
      name: name,
      age: age,
      email: email,
    }
    const url = `http://192.168.11.42:3000/users/${props.selecteduser.id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataBody)
    });
    const result = await res.json();
    console.warn(name,age,email);
  }


  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput style={styles.modalInput} value={name} onChangeText={(text) => setName(text)} />
        <TextInput style={styles.modalInput} value={age} onChangeText={(text) => setAge(text)} />
        <TextInput style={styles.modalInput} value={email} onChangeText={(text) => setEmail(text)} />
        {/* <Text>{props.selecteduser.name}</Text> */}
        <View style={{ margin: 5}}>
          <Button title="Save" onPress={updateUserData}/>
        </View>
        <View style={{ margin: 5}} >
          <Button title="Close" onPress={() => props.setshowmodal(false)} />
        </View>
      </View>
    </View>
  );
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.60,
    elevation: 5
  },
  modalInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    marginBottom: 10
  },





})

export default App;




