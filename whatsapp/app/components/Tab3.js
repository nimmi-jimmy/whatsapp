import React from 'react';
import { View, StyleSheet,Text,ScrollView,Image,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';


const Tab3 = ({navigation}) => {
    return(<>

        <ScrollView>

            <View style={{ backgroundColor: '#fff', height: 700}}>
                <TouchableOpacity>
                    <View>
                         <Text style={styles.title}>Jasmy</Text>
                         <TouchableOpacity>
                             <Icon name="call" color={"#047a6c"} size={28} marginLeft={320} />
                         </TouchableOpacity>
                    </View>
                        
                        <Text style={styles.lastmsg}>31/12/21, 10.30 PM</Text>
                        <Image style={{width:25, height: 30, marginTop: -40, marginLeft: 5}} source={require('F:/works/whatsapp/assets/female1.jpg')}></Image>
                </TouchableOpacity>

                

                <Image style={{width:15, height: 10, marginTop: -1, marginLeft: 45}} source={require('F:/works/whatsapp/assets/red.png')}></Image>

               
                
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
                right: 30,}} onPress={() => navigation.navigate("CallScreen")} >
                    <Icon name={"call"} color={"#fff"} size={28} style={{marginTop: 10}}/>
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
        marginTop: 15,
        fontFamily: "Roboto_Medium"
    },
    lastmsg: {
        fontSize: 14,
        marginLeft:60,
        marginTop: -25
        ,fontFamily: "Roboto_Regular"
    
    },
});

export default Tab3;