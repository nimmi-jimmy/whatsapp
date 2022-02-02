import React, {useState} from 'react';
import { Button, View, Text, StatusBar, Pressable, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import axios from 'axios';

export default function Login({navigation}) {

  const [userEmail,setUserEmail] = useState('');
  const [userPassword,setUserPassword] = useState('');

  const _submitLogin = () => {

    if ( userEmail.length < 5 ) {
      alert("email must be greater than 5");
      return;
    }
    if ( userPassword.length < 3 ) {
      alert("password must be greater than 3");
      return;
    }

    axios
    .post("http://192.168.0.127:8000/api/auth/login",{ email: userEmail, password: userPassword })  
    .then((rsp) => { 
      alert('Login Success');
      //this.props.navigation.navigate("Home_Screen");
      console.log(rsp.data);
    })
    .catch((err) => {
      alert('Login Failed');
      console.log(err.response.status);
      console.log(err.response.data);
    });
  };

  //   console.log(email,password)
  // const form = new FormData();

  //   form.append('email',email)
  //   form.append('password',password)
  //     const options = {
  //       method: 'POST',
  //       url: `http://127.0.0.1:8000/api/login`,
  //       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  //       data: form
  //     };
      
  //     await axios.request(options).then(function (response) {

  //       alert("New Instruction Added ")
       
  //     }).catch(function (error) {
  //       console.error(error);
  //     });


  const {width} = Dimensions.get('window');

  return (<>

  <View style={{backgroundColor: '#fff', height: 800}} > 
  <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff" />
    <Text style={{color: '#047a6c', fontSize: 32, marginTop: 80, alignSelf: 'center', fontFamily: "Roboto_Bold", marginRight: 10}}> Welcome to WoxSpace</Text>
        <View style={{height: 50, backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 10, borderColor: '#dddddd', borderWidth: 1, marginLeft: 30, position: 'absolute', top: 220}}>
          <TextInput 
          style={{marginLeft: 50, fontSize: 18, marginTop: 10, fontFamily: "Roboto_Regular"}}
          placeholder="Enter Email"
          value={userEmail} 
          onChangeText={(t) => {
            setUserEmail(t);
          }}
          />
        </View>

        <View style={{height: 50, backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 10, borderColor: '#dddddd', borderWidth: 1, marginLeft: 30, position: 'absolute', top: 300}}>
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
        

        <Pressable style={{marginTop: 300, borderWidth: 1, borderRadius: 10, backgroundColor: '#25D366', borderColor: '#25D366', marginLeft: 20, marginRight: 20, height: 50}}
          onPress={_submitLogin}
        >
            <Text style={{color: '#fff', fontSize: 24, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 5}}>Sign In</Text>
        </Pressable>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: '#047a6c', fontSize: 20, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 15}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register_Screen')}>
                <Text style={{color: '#25D366', fontSize: 20, fontFamily: "Roboto_Bold", alignSelf: 'center', marginTop: 15}}>Sign Up</Text>
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
