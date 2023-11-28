// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput, Modal } from "react-native";

// const App = () => {

//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(undefined);

//   const getApiData = async () => {
//     const url = "http://192.168.1.43:3000/users";
//     // const url = "https://dummyjson.com/products/1";

//     const res = await fetch(url);
//     const result = await res.json();
//     // console.warn(props.selecteduser);
//     setData(result);
//   }

// const deleteUser = async (id) => {
//   const url = `http://192.168.1.43:3000/users/${id}`;
//   const res = await fetch(url, {
//     method: "delete"
//   });
//   const result = await res.json();
//   console.log(res, result, id);  // console.warn(props.selecteduser);
//   if (result) {
//     console.warn("User deleted");
//     getApiData();
//   } 
// }

// useEffect(() => {
//   getApiData();
// }, [])

// const updateUser = (data) => {
//   setShowModal(true);
//   setSelectedUser(data);
//   // console.warn(selectedUser);
// }
//   const updateModal = async () => {
//     const url = `http://192.168.1.43:3000/users/${id}`;
//     const res = await fetch(url, {
//       method: "PUT"
//     });
//     const result = await res.json();

//   }
//   return (

//     <View style={styles.main}>

//       <View style={styles.dataWrapper}>
//         <Text>Name</Text>
//         <Text>Age</Text>
//         <Text>Email</Text>
//         <Button title="Delete" />
//         <Button title="Update" />
//       </View>

//       {
//         data.length ?
//           data.map((item) => {
//             return (
//               <View style={styles.dataWrapper}>
//                 <Text>{item.name}</Text>
//                 <Text>{item.age}</Text>
//                 <Text>{item.email}</Text>
//                 <Button title="Delete" onPress={() => deleteUser(item.id)} />
//                 <Button title="Update" onPress={() => updateUser(item)} />
//               </View>
//             )
//           })
//           : null
//       }

//       <Modal visible={showModal} transparent={true}>
//         <UserModal setshowmodal={setShowModal} selecteduser={selectedUser} />
//       </Modal>
//     </View>
//   )
// }
// const UserModal = (props) => {
//   // console.warn(props.selecteduser);
//   const [name, setName] = useState(undefined);
//   const [age, setAge] = useState(undefined);
//   const [email, setEmail] = useState(undefined);

//   useEffect(() => {

//     if (props.selecteduser) {
//       setName(props.selecteduser.name);
//       setAge(props.selecteduser.age.toString());
//       setEmail(props.selecteduser.email);
//     }
//   }, [props.selecteduser]);

// const updateUserData = async () => {
//   const dataBody = {
//     name: name,
//     age: age,
//     email: email,
//   }
//   const url = `http://192.168.1.43:3000/users/${props.selecteduser.id}`;
//   const res = await fetch(url, {
//     method: "PUT",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dataBody)
//   });
//   const result = await res.json();
//   console.warn(name,age,email);
// }


//   return (
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <TextInput style={styles.modalInput} value={name} onChangeText={(text) => setName(text)} />
//         <TextInput style={styles.modalInput} value={age} onChangeText={(text) => setAge(text)} />
//         <TextInput style={styles.modalInput} value={email} onChangeText={(text) => setEmail(text)} />
//         {/* <Text>{props.selecteduser.name}</Text> */}
//         <View style={{ margin: 5}}>
//           <Button title="Save" onPress={updateUserData}/>
//         </View>
//         <View style={{ margin: 5}} >
//           <Button title="Close" onPress={() => props.setshowmodal(false)} />
//         </View>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   dataWrapper: {
//     flexDirection: 'row',
//     justifyContent: "space-around",
//     backgroundColor: "orange",
//     margin: 5,
//     padding: 8
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.60,
//     elevation: 5
//   },
//   modalInput: {
//     borderWidth: 1,
//     borderRadius: 10,
//     width: 300,
//     marginBottom: 10
//   },





// })

// export default App;

// import React, { useState } from "react";
// import {
//   View,
//   Text
// } from "react-native";


// const App = () => {
//   const [data , setData] = useState({});
//   const getApiData = async() => {
//     const url = "http://0.0.0.0:3000/users";
//     const res = await fetch(url);
//     const result = await res.json();
//    setData(result);
//   }
//   return (
//     <View>
//      <Text>retrieve data from server</Text>
//      {
//       data.name
//      }
//     </View>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";

// const App = () => {
//   const [data, setData] = useState({});
//   const [error, setError] = useState(null);

//   const getApiData = async () => {
//     try {
//       const url = "http://0.0.0.0:3000/users";
//       const res = await fetch(url);

//       if (!res.ok) {
//         // Check if the response status is not OK
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }

//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     getApiData();
//   }, []); // Empty dependency array to ensure it only runs once

//   return (
//     <View>
//       <Text>Retrieve data from server</Text>
//       {error ? (
//         <Text>Error fetching data: {error}</Text>
//       ) : (
//         <Text>{data.name}</Text>
//       )}
//     </View>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Modal, TextInput } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [selectedUser , setSelectedUser] = useState([]);

  const getApiData = async () => {
    const url = "http://192.168.1.43:3000/users";
    const res = await fetch(url);
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, [])

  const deleteUser = async (id) => {
    const url = `http://192.168.1.43:3000/users/${id}`;
    const res = await fetch(url, {
      method: "Delete"
    });
    const result = await res.json();
    if (result) {
      console.warn("user delted");
      getApiData();
    }
  }

  const updateUser = () => {
    setShowModal(true);
    setSelectedUser(data);
  }

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20 }}>CRUD Operations </Text>
      <View style={styles.mainView} >
        <Text>Name</Text>
        <Text>Age</Text>
        {/* <Text>{item.email}</Text> */}
        <Button title="Delete" />
        <Button title="Update" />
      </View>
      {
        data.length ? (

          data.map((item, index) => (
            <View style={styles.mainView} key={index}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              {/* <Text>{item.email}</Text> */}
              <Button title="Delete" onPress={() => deleteUser(item.id)} />
              <Button title="Update" onPress={() => updateUser(data)} />
            </View>
          ))
        )
          : (
            <Text>No Data Available</Text>
          )
      }
      <Modal visible={showModal} transparent={true}>
        <View style={styles.modalView}>
          <UserModal setshowmodal={setShowModal} selecteduser={selectedUser} />
        </View>
      </Modal>
    </View>
  );
};

const UserModal = (props) => {
  // console.warn(props.selecteduser);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(()=>{
    if(props.selecteduser){
      setName(props.selecteduser.name);
      setAge(props.selecteduser.age);
      setEmail(props.selecteduser.email);
    }
  },[props.selecteduser])
  return (
    <View style={styles.modalViewWrapper}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your Name"
        value={name}
        // onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your Age"
        value={age}
        // onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your Email"
        value={email}
        // onChangeText={(text) => setEmail(text)}
      />
      <Button title="Save"  />
      <Button title="close" onPress={()=>props.setshowmodal(false)}/>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: 'orange',
    margin: 5,
    padding: 8
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalViewWrapper: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    marginBottom: 10
  }

})

export default App;



