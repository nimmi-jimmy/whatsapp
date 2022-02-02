import React, {useState, useEffect, useCallback} from 'react';
import { Button, View, Text, StatusBar, Pressable, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions, TextInput, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'

export default function accounts({navigation}) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View > 
           <Ionicons name="send-sharp" size={28} color={'#047a6c'} />
      </View>
      </Send>
    );
  }

  const renderBubble = (props) => {
    return (
      <Bubble 
      {...props}
      wrapperStyle={{
        right: {
          backgrounColor: '#047a6c'
        }
      }}
      textStyle={{
        right: {
          color: '#fff'
        }
      }}
    />
    ); 
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  const [value, setValue] = React.useState('')

  const {width} = Dimensions.get('window');

  const handleChange = (text) => {
    setValue(text)
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      />
  );
};
    //<>

  {/* <ScrollView>
    <View style={{ height: 700}}>
    </View>
  </ScrollView>
  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', left: 0, bottom: 20, maxHeight: 100}}> 
        <View style={{backgroundColor: 'white',elevation: 0.5 ,width: width - 60, borderRadius: 30, marginLeft: 5,}}>
          <TextInput 
          value={value}
          onChangeText={handleChange}
          style={{height: '180%', marginLeft: 50, fontSize: 20}}
          multiline
          placeholder="Message"
          />
        </View>
        <TouchableOpacity style={{
                backgroundColor: '#047a6c',
                borderColor: '#047a6c',
                borderWidth: 1,
                borderRadius: 25,
                height: 50,
                elevation: 5,
                width: 50,
                position: 'absolute', 
                bottom: -13,
                right: -55}}>
               
           {value.trim() ? (
           <Ionicons name="send-sharp" size={28} color={'#fff'} style={{marginLeft: 15, marginTop: 10}}/>
           ) : (
           <Icon name="mic" size={28} color={'#fff'} style={{marginLeft: 10, marginTop: 10}} />
           )}
             
        </TouchableOpacity>
      </View>
      
  </> */}

//   );
// }

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
