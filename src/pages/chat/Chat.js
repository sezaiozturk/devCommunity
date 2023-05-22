import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MessageBox from '../../components/MessageBox';
import styles from './Chat.style';

const messageList = [
  {message: 'selamın aleyküm', sender: 'me'},
  {message: 'nasılsın', sender: 'me'},
  {message: 'iyiyemm walla', sender: 'you'},
  {message: 'ohh ohh iyi ol', sender: 'me'},
  {message: 'sen naparsın', sender: 'you'},
  {message: 'herşey yolunda', sender: 'you'},
  {message: 'selamın aleyküm', sender: 'me'},
  {message: 'nasılsın', sender: 'me'},
  {message: 'iyiyemm walla', sender: 'you'},
  {message: 'ohh ohh iyi ol', sender: 'me'},
  {message: 'sen naparsın', sender: 'you'},
  {message: 'herşey yolunda', sender: 'you'},
  {message: 'selamın aleyküm', sender: 'me'},
  {message: 'nasılsın', sender: 'me'},
  {message: 'iyiyemm walla', sender: 'you'},
  {message: 'ohh ohh iyi ol', sender: 'me'},
  {message: 'sen naparsın', sender: 'you'},
  {message: 'herşey yolunda', sender: 'you'},
];

const renderItem = ({item}) => (
  <MessageBox
    messsage={item.message}
    theme={item.sender == 'me' ? 'secondary' : 'primary'}
  />
);

const handleMessage = text => console.log(text);

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messageList} renderItem={renderItem} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.sendContainer}>
          <TextInput
            style={styles.message}
            multiline
            placeholder="Mesajınız..."
            placeholderTextColor={'gray'}
            onChangeText={handleMessage}
          />
          <Text style={styles.send}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
