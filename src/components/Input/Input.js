import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from './Input.style'
import { COLORS } from "../../colors/Colors";

const Input = ({title,placeholder,secure}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        style={styles.input}
        secureTextEntry={secure?true:false}
      />
    </View>
  );
};

export default Input;
