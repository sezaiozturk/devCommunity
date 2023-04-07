import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
import {COLORS} from '../../colors/Colors';

const Input = ({
  title,
  placeholder,
  secure,
  value,
  onChangeText,
  multiline,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secure ? true : false}
        multiline={multiline ? true : false}
      />
    </View>
  );
};

export default Input;
