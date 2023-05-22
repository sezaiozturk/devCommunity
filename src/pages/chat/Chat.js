import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MessageBox from '../../components/MessageBox';
import styles from './Chat.style';

const Chat = () => {
  return (
    <View style={styles.container}>
      <MessageBox />
      <MessageBox />
      <MessageBox theme="secondary" />
      <MessageBox theme="secondary" />
      <MessageBox />
      <MessageBox theme="secondary" />
      <MessageBox theme="secondary" />
    </View>
  );
};

export default Chat;
