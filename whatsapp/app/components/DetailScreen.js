import React from 'react';
import { View, StyleSheet,TouchableOpacity,Pressable, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigator from './TabNavigator';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import camera from './camera';
import { Icon } from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const DetailScreen = () => {
    return(
    <Tab.Navigator initialRouteName="CHATS"
    screenOptions={{
        tabBarIndicatorStyle: {
            backgroundColor: '#fff'
        },
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: '#047a6c'},
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#dddddd',

      }} >
      <Tab.Screen name="CAMERA" component={camera}
      options={{
         tabBarLabelStyle:{display:'none'},
        tabBarIcon: ({ color }) => (
          <Ionicons name="camera" color={color} size={24} />
        ),
      }}
      
      /> 
      <Tab.Screen name="CHATS" component={TabNavigator} /> 
      <Tab.Screen name="STATUS" component={Tab2} /> 

      <Tab.Screen name="CALLS" component={Tab3} /> 
      
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
});

export default DetailScreen;