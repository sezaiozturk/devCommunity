import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.disableContainer : styles.enableContainer}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
