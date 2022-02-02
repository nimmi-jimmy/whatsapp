import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bookinfo from './Bookinfo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './DetailScreen';

const Home = () => {
    return <>
        <Bookinfo />

        <TabNavigator />
        
    </>
}

export default Home;