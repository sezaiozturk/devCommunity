import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './RowButton.style';

const RowButton = ({
  source,
  title,
  subTitle,
  onPress,
  image,
  letter,
  control = false,
  approve,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {image ? (
            <Image source={{uri: source}} style={styles.image} />
          ) : (
            <View style={styles.firstLetterContainer}>
              <Text style={styles.firstLetter}>{letter}</Text>
            </View>
          )}
          <View style={styles.contextContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        {control && (
          <TouchableOpacity onPress={approve}>
            <Text style={styles.approve}>approve</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RowButton;
