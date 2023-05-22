import {View, Text} from 'react-native';
import React from 'react';
import styles from './MessageBox.style';

const MessageBox = ({messsage, theme = 'primary'}) => {
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].innerContainer}>
        <View style={styles[theme].messageContainer}>
          <Text style={styles[theme].message}>{messsage}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageBox;