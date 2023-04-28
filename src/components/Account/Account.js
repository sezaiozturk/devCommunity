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
        <Image source={source} style={styles.accountIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default Account;
