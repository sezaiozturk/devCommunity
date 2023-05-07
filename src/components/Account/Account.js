import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './Account.style';

const Account = ({title, source, url}) => {
  var icon = '';
  if (source == 'instagram') {
    icon = require('../../assets/icons/instagram.png');
  } else if (source == 'twitter') {
    icon = require('../../assets/icons/twitter.png');
  } else if (source == 'github') {
    icon = require('../../assets/icons/github.png');
  } else if (source == 'linkedln') {
    icon = require('../../assets/icons/linkedln.png');
  } else {
    icon = require('../../assets/icons/coding.png');
  }
  return (
    <View style={styles.accountContentContainer}>
      <Text style={styles.accountTitle}>{title}</Text>
      <TouchableHighlight
        onPress={async () => {
          if (url === undefined) {
            Alert.alert('Hesabı tanımlanmamış...');
            return;
          }
          const isSupported = await Linking.canOpenURL(url);
          if (isSupported) {
            await Linking.openURL(url);
          } else {
            Alert.alert('Başarısız...');
          }
        }}>
        <Image style={styles.accountIcon} source={icon} />
      </TouchableHighlight>
    </View>
  );
};

export default Account;
