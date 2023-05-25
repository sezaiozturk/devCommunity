import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Gallery.style';
import firestore from '@react-native-firebase/firestore';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    firestore()
      .collection('Gallery')
      .onSnapshot(querySnapshot => {
        let x = [];

        querySnapshot.forEach(async documentSnapshot => {
          x.push(documentSnapshot.data());
        });
        setPhotos(x);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <View style={{flex: 1, borderWidth: 10}}>
            <Image
              style={{width: Dimensions.get('window').width / 3, height: 100}}
              source={{
                uri: item.downloadUrl,
              }}
            />
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default Gallery;
