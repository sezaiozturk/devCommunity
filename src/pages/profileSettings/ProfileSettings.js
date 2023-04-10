import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfileSettings.style';
import {Formik} from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown';
import MultipleDropdown from '../../components/MultipleDropdown';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ProfileSettings = () => {
  const currentMemberUid = auth().currentUser.uid;
  function handleSave({userName, fullName, accounts, biography}) {
    firestore()
      .collection('Members')
      .doc(auth().currentUser.uid)
      .set({
        currentMemberUid,
        userName,
        fullName,
        department,
        communities,
        accounts,
        biography,
      })
      .then(() => {
        console.log('User added!');
      });
  }
  const departmentsData = [
    {key: '1', value: 'Bilgisayar Mühendisliği'},
    {key: '2', value: 'Yazılım Mühendisliği'},
    {key: '3', value: 'Makine Mühendisliği'},
    {key: '4', value: 'Endüstri Mühendisliği'},
    {key: '5', value: 'Elektrik-Elektronik Mühendisliği'},
    {key: '6', value: 'Bilgisayar Programcılığı'},
    {key: '7', value: 'Diğer'},
  ];
  const communitiesData = [
    {key: '1', value: 'Yazılım Geliştirme Topluluğu'},
    {key: '2', value: 'Bilişim Topluluğu'},
    {key: '3', value: 'Raclab'},
  ];

  const [department, setDepartment] = useState('');
  const [communities, setCommunities] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={() => console.log('çalıştı')}>
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
                data={departmentsData}
                title={'Department'}
                setSelected={val => setDepartment(val)}
              />
              <MultipleDropdown
                data={communitiesData}
                title={'Communities'}
                placeholder={'Select your communities'}
                setSelected={val => setCommunities(val)}
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
