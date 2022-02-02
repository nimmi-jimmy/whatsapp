import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image
} from "react-native";

//const BASE_URL = 'http://192.168.0.127:8000/api/list';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6081e1754a754167d41334a';


const list = () => {
  
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return()=>{

    } 
  }, []);

  getAllUsers =()=>{
    fetch('${BASE_URL}/user', { headers: { 'app-id': APP_ID }})
    .then(({ res }) => res.json())
    .then((resJson)=>{setData(resJson.data)})
    .catch(console.error)
    .finally(() => setIsloading(false));
  }

  const renderUser = () => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{uri:item.picture}}
          resizeMode='contain'
        />
        <View>
          <Text>{'${item.title} ${item.firstName} ${item.lastName}'}</Text>
        </View>

      </View>
    )
  }

  return (
    <View style={styles.container}>
     {
      isloading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => 'key-${item.id}'}
          renderItem={renderUser}
        />
      )
     }  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default list;