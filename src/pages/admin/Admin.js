import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Admin.style';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const Admin = () => {
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState('');
  let downloadUrl;

  async function selectPhoto() {
    ImagePicker.openPicker({
      cropping: false,
    }).then(image => {
      setPhoto(image.sourceURL);
    });
  }
  function handleChange(value) {
    setComment(value);
  }
  async function share() {
    const referance = storage().ref('posts/' + uuid.v1());
    try {
      await referance.putFile(photo);
      downloadUrl = await referance.getDownloadURL();

      firestore()
        .collection('Posts')
        .doc()
        .set({
          downloadUrl,
          comment,
          communityId: 'xd3iyfilasF16BEvJGfd',
          date: new Date().toISOString(),
        })
        .then(() => {});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        {photo && <Image style={styles.image} source={{uri: photo}} />}
        <Input
          placeholder={'Enter your comment'}
          multiline
          onChangeText={handleChange}
        />
        <Button title={'Share'} onPress={share} />
      </ScrollView>
      <TouchableOpacity style={styles.flatIcon} onPress={selectPhoto}>
        <Icon name={'image-size-select-actual'} size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Admin;
