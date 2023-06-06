import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './Zoom.style';

const Zoom = ({route}) => {
  const {photo} = route.params;
  console.log(photo);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.photo} source={{uri: photo.downloadUrl}} />
    </SafeAreaView>
  );
};

export default Zoom;
