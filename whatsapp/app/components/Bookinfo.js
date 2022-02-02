import React, {Component} from "react";
import  {
  View,
  Button,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { NavigationContainer } from '@react-navigation/native';


export default class Bookinfo extends Component {

  render() {

    return(
      
      <View>
          <StatusBar backgroundColor={'#047a6c'}></StatusBar>
        <Pressable style={{width: '100%',height: 60, backgroundColor: '#047a6c'}}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{color: '#fff', fontSize: 20,  marginLeft: 10, fontFamily: "Roboto_Bold"}}>WoxSpace</Text>
            <View style={{marginLeft: 210}}>
                <TouchableOpacity>
                    <Icon name="search" color={"#fff"} size={28}/>
                </TouchableOpacity>
             
            </View>
            <View style={{marginLeft: 20}}>
              <TouchableOpacity>
                    <Icon name="more-vert" color={"#fff"} size={28}/>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>  

      </View>


    );
  }
}
