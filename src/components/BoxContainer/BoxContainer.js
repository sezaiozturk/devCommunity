import { View, Text } from "react-native";
import React from "react";
import styles from './BoxContainer.style'

const Background = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
};

export default Background;