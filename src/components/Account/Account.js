import {View, Text, TouchableHighlight, Image, Linking} from 'react-native';
import React from 'react';
import styles from './Account.style';

const Account = ({title, source}) => {
  return (
    <View style={styles.accountContentContainer}>
      <Text style={styles.accountTitle}>{title}</Text>
      <TouchableHighlight
        onPress={() => Linking.canOpenURL('https://google.com')}>
        <Image source={source} style={styles.accountIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default Account;
