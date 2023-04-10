import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './RowButton.style';

const RowButton = ({img, title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.jpeg')}
        style={styles.image}
      />
      <View style={styles.contextContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default RowButton;
