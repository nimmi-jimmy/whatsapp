import * as React from 'react';
import { Button, View, Text, StatusBar, Pressable, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function calls({navigation}) {
  return (<>

  <ScrollView>
    <View style={{backgroundColor: '#fff', height: 700}}>

        <TouchableOpacity>
            <View style={{flexDirection: 'row' ,marginTop: 15,}}>
                <Text style={styles.title}>New group call</Text>
            </View>
            <View style={{
                backgroundColor: '#047a6c',
                borderColor: '#047a6c',
                borderWidth: 1,
                borderRadius: 20,
                height: 40,
                width: 40,
                position: 'absolute',
                left: 10,
                top: 15}}>

            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row' ,marginTop: 25,}}>
                <Text style={styles.title}>New contact </Text>
            </View>
            <View style={{
                backgroundColor: '#047a6c',
                borderColor: '#047a6c',
                borderWidth: 1,
                borderRadius: 20,
                height: 40,
                width: 40,
                position: 'absolute',
                left: 10,
                top: 30}}>

            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row' ,marginTop: 20,}}>

                <Text style={styles.title}>Abhirami</Text>

                <View style={{ marginTop: 10, marginLeft: 145, flexDirection: 'row' }} >
                    <TouchableOpacity>
                        <Icon name="call" color={"#047a6c"} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="videocam" color={"#047a6c"} size={28} marginLeft={30} />
                    </TouchableOpacity>
                </View> 

            </View>
            <Image style={{width:25, height: 30, marginTop: -30, marginLeft: 15}} source={require('F:/works/whatsapp/assets/female1.jpg')}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{flexDirection: 'row' ,marginTop: 20,}}>
                <Text style={styles.title}>Anigha</Text>
                <View style={{ marginTop: 10, marginLeft: 163, flexDirection: 'row' }} >
                    <TouchableOpacity>
                        <Icon name="call" color={"#047a6c"} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="videocam" color={"#047a6c"} size={28} marginLeft={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={{width:25, height: 30, marginTop: -30, marginLeft: 15}} source={require('F:/works/whatsapp/assets/female1.jpg')}></Image>
        </TouchableOpacity>


    </View>
  </ScrollView></>

     
      
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
      ,fontFamily: "Roboto_Medium"
    },
    lastmsg: {
        fontSize: 14,
        marginLeft:50,
        marginTop: 10
        ,fontFamily: "Roboto_Regular"
       
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
