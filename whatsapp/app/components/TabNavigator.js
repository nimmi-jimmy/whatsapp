import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import contacts from './contacts';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { userList } from "./data";
const {width:wWidth, height:wHeight} = Dimensions.get('window');

    const TabNavigator = ({navigation}) => {
        const renderItem = ({item}) => {
            return (
                <View 
                    style={{
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        width: wWidth - 20,
                        marginVertical: 5,
                        
                        marginHorizontal: 10,
                    }}>
                    <View style={{flexDirection: 'row', }}>
                        <View 
                            style={{
                                width: 60,
                                height: 60, 
                                borderRadius: 30,
                                backgroundColor: "grey"
                            }}>
                        </View>
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <Text style={{fontFamily: 'Roboto_Bold'}}>{item.name}</Text>
                        <Text style={{fontFamily: 'Roboto_Regular'}}>{item.lastMessage}</Text>
                    </View>
                    <View style={{paddingLeft: 200}}>
                        <Text style={{fontFamily: 'Roboto_Medium'}}>{item.lastScene}</Text>
                    </View>
                </View>
            );
        };
  
    return (<>
        <ScrollView>

            <View style={{backgroundColor: '#fff', height: 700}}>
                <View style={{flex: 1}}>
                    <FlatList 
                        data={userList}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>    
            </View>
        </ScrollView>

    <TouchableOpacity style={{
                backgroundColor: '#047a6c',
                borderColor: '#047a6c',
                borderWidth: 1,
                borderRadius: 25,
                height: 50,
                width: 50,
                position: 'absolute', 
                bottom: 40, 
                right: 25,}} onPress={() => navigation.navigate("Select Contact")} >
    
        <Icon name="message" size={28} color="#fff" type="meterialicons" marginTop={10} />
        
    </TouchableOpacity>
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
      marginLeft: 50,  
      fontFamily: "Roboto_Medium"
    },
    lastmsg: {
        fontSize: 14,
        marginLeft:50,
        marginTop: 10,
        fontFamily: "Roboto_Regular"
       
    },
    lastscene: {
        fontSize: 14,
        marginLeft: 220,
        marginTop: 2,
        color: '#25D366',
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
  
  export default TabNavigator;