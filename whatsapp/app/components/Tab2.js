import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Tab2 = () => {
    return(<>
        <ScrollView>
        <View style={{backgroundColor: '#fff', height: 700}}>
          <View style={{flexDirection: 'row'}}>
            <View 
                style={{
                  width: 60,
                  height: 60, 
                  borderRadius: 30,
                  backgroundColor: "grey",
                  margin: 10
                }}>
              </View>
              <View 
                style={{
                  width: 20,
                  height: 20, 
                  borderRadius: 30,
                  backgroundColor: "#25D366",
                  position: 'absolute',
                  top: 50, 
                  left: 50
                }}>
                  <Icon name="plus" size={20} color={"#fff"} type="entypo" />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 16, fontFamily: 'Roboto_Bold'}}>My Status</Text>
                <Text style={{color: 'grey', fontFamily: 'Roboto_Regular'}}>Tap to add status update</Text>
              </View>
          </View>
           
          <View>
            <Text style={{margin: 10,fontSize: 16, fontFamily: 'Roboto_Bold'}}>Recent Updates</Text>
          </View>
        </View>
        </ScrollView>

        <TouchableOpacity style={{
                backgroundColor: '#ddd',
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 25,
                height: 45,
                elevation: 5,
                width: 45,
                position: 'absolute', 
                bottom: 90, 
                right: 30,}} >
    
        <Icon name="edit" size={26} color="#000" type="meterialicons" marginTop={8} />
        
    </TouchableOpacity>

    <TouchableOpacity style={{
                backgroundColor: '#047a6c',
                borderColor: '#047a6c',
                borderWidth: 1,
                borderRadius: 28,
                height: 55,
                elevation: 5,
                width: 55,
                position: 'absolute', 
                bottom: 20, 
                right: 22,}}  >
    
        <Icon name="camera" size={20} color="#fff" type="fontisto" marginTop={14} />
        
    </TouchableOpacity></>
    
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
      marginLeft: 50,  
      marginTop: 15,
      fontFamily: "Roboto_Medium"
    },
    title1: {
        fontSize: 18,
        marginLeft: 50,  
        marginTop: 30,
        fontFamily: "Roboto_Medium"
      },
    lastmsg: {
        fontSize: 14,
        marginLeft:50,
        marginTop: 10,
        fontFamily: "Roboto_Medium"

    },
    lastscene: {
        fontSize: 14,
        marginLeft: 220,
        marginTop: 2,
        fontFamily: "Roboto_Regular"     
    },
    lastscene1: {
        fontSize: 14,
        marginLeft: 210,
        marginTop: 2,
        fontFamily: "Roboto_Regular"      
    },
    lastscene2: {
        fontSize: 14,
        marginLeft: 240,
        marginTop: 2,
        fontFamily: "Roboto_Regular"      
    },
    lastscene3: {
        fontSize: 14,
        marginLeft: 235,
        marginTop: 2,
        fontFamily: "Roboto_Regular"      
    },
  });

export default Tab2;