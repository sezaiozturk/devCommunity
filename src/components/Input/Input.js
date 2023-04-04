import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from './Input.style'

const Input = ({title,placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.input}/>
    </View>
  );
};

export default Input;
