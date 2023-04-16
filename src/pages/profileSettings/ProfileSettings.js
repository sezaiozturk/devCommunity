import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileSettings.style';
import {Formik} from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown';
import MultipleDropdown from '../../components/MultipleDropdown';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';

const ProfileSettings = ({navigation}) => {
  const uid = auth().currentUser.uid;
  const [department, setDepartment] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [photo, setPhoto] = useState(null);
  let downloadUrl;

  async function handleSave({userName, fullName, accounts, biography}) {
    const referance = storage().ref('profile/' + uuid.v1());
    try {
      await referance.putFile(photo);
      downloadUrl = await referance.getDownloadURL();

      firestore()
        .collection('Members')
        .doc(auth().currentUser.uid)
        .set({
          uid,
          userName,
          fullName,
          selectedDepartment,
          selectedCommunities,
          accounts,
          biography,
          downloadUrl,
        })
        .then(() => {
          navigation.navigate('MemberTab');
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function getCommunities() {
    let arr = [];
    firestore()
      .collection('Communities')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          arr.push({
            key: documentSnapshot.id,
            value: documentSnapshot.data().name,
          });
        });
        setCommunities(arr);
      });
  }
  async function getDepartment() {
    let arr = [];
    firestore()
      .collection('Departments')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          arr.push({
            key: documentSnapshot.id,
            value: documentSnapshot.data().department,
          });
        });
        setDepartment(arr);
      });
  }
  function selectPhoto() {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      setPhoto(image.sourceURL);
    });
  }

  useEffect(() => {
    getCommunities();
    getDepartment();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={selectPhoto}>
            <View style={styles.imageCircle}>
              {photo != null ? (
                <Image style={styles.image} source={{uri: photo}} />
              ) : (
                <Image
                  style={styles.imageContainer}
                  source={require('../../assets/icons/userPhoto.png')}
                />
              )}
            </View>
          </TouchableHighlight>
        </View>
        <Formik
          initialValues={{
            userName: '',
            fullName: '',
            accounts: '',
            biography: '',
          }}
          onSubmit={handleSave}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <Input
                title={'Username'}
                placeholder={'Enter your username'}
                value={values.userName}
                onChangeText={handleChange('userName')}
              />
              <Input
                title={'Fullname'}
                placeholder={'Enter your fullname'}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
              />
              <Dropdown
                data={department}
                title={'Department'}
                setSelected={val => setSelectedDepartment(val)}
              />
              <MultipleDropdown
                data={communities}
                title={'Communities'}
                placeholder={'Select your communities'}
                setSelected={val => setSelectedCommunities(val)}
              />
              <Input
                title={'Accounts'}
                placeholder={'Enter your accounts'}
                value={values.accounts}
                onChangeText={handleChange('accounts')}
                multiline
              />
              <Input
                title={'Biography'}
                placeholder={'Enter your biography'}
                value={values.biography}
                onChangeText={handleChange('biography')}
                multiline
              />
              <Button title={'Save'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;
