import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Home from './Home';

  const HomeScreen = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Home')
    },3000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff" />
            <Image source={require('F:/works/whatsapp/assets/splash1.png')} style={{width:200,height:200}}  />    
            <Text style={{fontSize:30,color:'green'}} >FACEBOOK</Text>
        </View>
    )
}

export default HomeScreen
