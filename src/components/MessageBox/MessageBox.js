import {View, Text} from 'react-native';
import React from 'react';
import styles from './MessageBox.style';

const MessageBox = ({message, theme = 'primary', name = 'saide'}) => {
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].innerContainer}>
        <View style={styles[theme].messageContainer}>
          <Text style={styles[theme].name}>{name}</Text>
          <Text style={styles[theme].message}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageBox;
