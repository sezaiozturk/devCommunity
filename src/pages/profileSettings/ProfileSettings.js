import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
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
import {MultipleSelectList} from 'react-native-dropdown-select-list';

const ProfileSettings = ({navigation}) => {
  const [department, setDepartment] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);

  function handleSave({userName, fullName, accounts, biography}) {
    firestore()
      .collection('Members')
      .doc(auth().currentUser.uid)
      .set({
        userName,
        fullName,
        selectedDepartment,
        selectedCommunities,
        accounts,
        biography,
      })
      .then(() => {
        navigation.navigate('MemberTab');
      });
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
  useEffect(() => {
    getCommunities();
    getDepartment();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={() => null}>
            <View style={styles.imageCircle}>
              <Image source={require('../../assets/icons/userPhoto.png')} />
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
