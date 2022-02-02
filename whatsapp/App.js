import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar, Image,Pressable, TouchableOpacity } from "react-native";
import Bookinfo from './app/components/Bookinfo';
import Home from './app/components/Home';
import Login from './app/components/Login';
import Register from './app/components/Register';
import HomeScreen from './app/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import contacts from './app/components/contacts';
import calls from './app/components/calls';
import accounts from './app/components/accounts';
import TabNavigator from './app/components/TabNavigator';
import DetailScreen from './app/components/DetailScreen';
import { Icon } from 'react-native-elements';
import {useFonts} from "expo-font"
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

function splashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Home_Screen');
  }, 3000);
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#ffffff'}} >
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ffffff" />
        <Image source={require('F:/works/whatsapp/assets/whatsapp.jpg')} style={{width:120,height:120, marginTop: 200, marginLeft: 140}}  />  
        <Text style={{fontSize:26,color:'#dddddd', position: 'absolute', bottom: 90, left: 180, fontSize: 16, fontFamily: "Roboto_Regular"}} >from</Text>  
        <Text style={{fontSize:28,color:'#25D366', position: 'absolute', bottom: 50, left: 135,fontFamily: "Roboto_Bold"}} >FACEBOOK</Text>
    </View>
  );
}

function LogoTitle() {
  
  return (
    
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{
                backgroundColor: '#ddd',
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 25,
                height: 40,
                width: 40,
                marginLeft: -28
                }} >
          </TouchableOpacity>

            <Text style={{color: '#ffffff', fontSize: 20, marginTop: 8, marginLeft: 10,fontFamily: "Roboto_Bold"}}>Jasmy</Text>
            <View style={{marginLeft: 100}}>
              <TouchableOpacity>
                <Icon name="videocam" color={"#fff"} size={26} marginLeft={10} marginTop= {10} />          
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 25, marginTop: 10}}>
              <TouchableOpacity>
                <Icon name="call" color={"#fff"} size={26} />
              </TouchableOpacity>            
            </View>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <TouchableOpacity>
                    <Icon name="more-vert" color={"#fff"} size={26}/>
              </TouchableOpacity>
            </View>
          </View>
 
  );
}

function LogoTitle1() {
  
  return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#ffffff', fontSize: 20, marginTop: 8, fontFamily: "Roboto_Bold"}}>Select contacts</Text>

            <View style={{marginLeft: 100, marginTop: 10}}>
              <TouchableOpacity>
                <Icon name="call" color={"#fff"} size={26} />
              </TouchableOpacity>            
            </View>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <TouchableOpacity>
                    <Icon name="more-vert" color={"#fff"} size={26}/>
              </TouchableOpacity>
            </View>
          </View>
          <View>
             <Text style={{color: '#ffffff', fontSize: 14, fontFamily: "Roboto_Regular", marginTop: -5}}>12 contacts</Text>
          </View>

    </View>
        
 
  );
}

  const App = () => {
    const[fontLoaded] = useFonts({
      Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
      Roboto_Medium: require("./assets/fonts/Roboto-Medium.ttf"),
      Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    });

    return fontLoaded ? (
      
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen options={{headerShown: false}}
            name="splash_Screen" component={splashScreen} />
            <Stack.Screen name="Home_Screen" component={Home}  options={{headerShown: false}} />
            <Stack.Screen name="Login_Screen" component={Login}  options={{headerShown: false}} />
            <Stack.Screen name="Register_Screen" component={Register}  options={{headerShown: false}} />

            <Stack.Screen name="Select Contact" component={contacts} 
            options={{ headerStyle: { backgroundColor: '#047a6c', color:'#ffffff'},headerTintColor: 'white', headerTitle: (props) => <LogoTitle1 {...props} /> }} />

            <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{headerShown: false}} />
            <Stack.Screen name="DetailScreen" component={DetailScreen}  options={{headerShown: false}} />
            <Stack.Screen name="CallScreen" component={calls}  
            options={{ headerStyle: { backgroundColor: '#047a6c'},headerTintColor: 'white', headerTitle: (props) => <LogoTitle1 {...props} /> }}
           />
           <Stack.Screen name="AccountScreen" component={accounts}  
            options={{ headerStyle: { backgroundColor: '#047a6c'},headerTintColor: 'white', headerTitle: (props) => <LogoTitle {...props} /> }}
           />
          </Stack.Navigator>
        </NavigationContainer>
        
  ) : (
    <AppLoading />
    );
  }

export default App;
