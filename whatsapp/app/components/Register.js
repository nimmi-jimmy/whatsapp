import React, {useState} from 'react';
import { Button, View, Text, StatusBar, Pressable, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import axios from 'axios';

export default function Register({navigation}) {

  const [userName,setUserName] = useState("")
  const [userEmail,setUserEmail] = useState("")
  const [userPassword,setUserPassword] = useState("")

  const signup = () =>
  {

    if ( userName.length < 3 ) {
      alert("name must be greater than 5");
      return;
    }
    if ( userEmail.length < 5 ) {
      alert("email must be greater than 5");
      return;
    }
    if ( userPassword.length < 3 ) {
    alert("password must be greater than 3");
      return;
    }

const data = { userName,userEmail,userPassword };

    axios
    .post("http://192.168.0.127:8000/api/register")
    .then((rsp) => { 
      alert('Register Success');
      console.log(rsp.data);
    })
    .catch((err) => {
      alert('Register Failed');
      console.log(err.response.status);
      console.log(err.response.data);
    });
  };


  const {width} = Dimensions.get('window');

  return (<>

  <View style={{backgroundColor: '#fff', height: 800}} > 
  <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff" />
    <Text style={{color: '#047a6c', fontSize: 32, marginTop: 80, alignSelf: 'center', fontFamily: "Roboto_Bold", marginRight: 10}}>Sign Up</Text>
        
        <View style={{height: 50, backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 10, borderColor: '#dddddd', borderWidth: 1, marginLeft: 30, position: 'absolute', top: 200}}>
          <TextInput 
          style={{marginLeft: 50, fontSize: 18, marginTop: 10, fontFamily: "Roboto_Regular"}}
          placeholder="Enter Name"
          value={userName} 
          onChangeText={(t) => {
            setUserName(t);
          }}
          />
        </View>

        <View style={{height: 50, backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 10, borderColor: '#dddddd', borderWidth: 1, marginLeft: 30, position: 'absolute', top: 270}}>
          <TextInput 
          style={{marginLeft: 50, fontSize: 18, marginTop: 10, fontFamily: "Roboto_Regular"}}
          placeholder="Enter Email"
          value={userEmail} 
          onChangeText={(t) => {
          setUserEmail(t);
          }}
          />
        </View>

        <View style={{height: 50, backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 10, borderColor: '#dddddd', borderWidth: 1, marginLeft: 30, position: 'absolute', top: 340}}>
          <TextInput 
          style={{marginLeft: 50, fontSize: 18, marginTop: 10, fontFamily: "Roboto_Regular"}}
          placeholder="Enter Password"
          value={userPassword} 
          onChangeText={(t) => {
            setUserPassword(t);
          }}
          secureTextEntry={true}
          />
        </View>
        <Pressable style={{marginTop: 340, borderWidth: 1, borderRadius: 10, backgroundColor: '#25D366', borderColor: '#25D366', marginLeft: 20, marginRight: 20, height: 50}}
         onPress={signup}
        // onPress={() => navigation.navigate('Login_Screen')}
        >
            <Text style={{color: '#fff', fontSize: 24, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 5}}>Sign Up</Text>
        </Pressable>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: '#047a6c', fontSize: 20, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 15}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login_Screen')}>
                <Text style={{color: '#25D366', fontSize: 20, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 15}}>Sign In</Text>
            </TouchableOpacity>
        </View>

  </View>
  </>   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#fff',
      padding: 10,
    },
    title: {
      fontSize: 18,
      marginLeft: 60,  
      marginTop: 12
    },
    lastmsg: {
        fontSize: 14,
        marginLeft:50,
        marginTop: 10
    },
    lastscene: {
        fontSize: 14,
        marginLeft: 220,
        marginTop: 2,
        color: '#25D366'     
    },
    lastscene1: {
        fontSize: 14,
        marginLeft: 210,
        marginTop: 2      
    },
    lastscene2: {
        fontSize: 14,
        marginLeft: 240,
        marginTop: 2      
    },
    lastscene3: {
        fontSize: 14,
        marginLeft: 235,
        marginTop: 2      
    },
    badge: {
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        borderWidth: 1,
        borderRadius: 10,
        height: 16,
        width: 16,
        position: 'absolute',
        right: 20,
        top: 40
    }
});
