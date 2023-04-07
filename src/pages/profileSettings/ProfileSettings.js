import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import styles from './ProfileSettings.style';
import Icon from 'react-native-vector-icons/';
import {Formik} from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';

const ProfileSettings = () => {
  function handleSave(values) {
    console.log(values);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableHighlight onPress={() => console.log('çalıştı')}>
            <View style={styles.imageCircle}>
              <Image source={require('../../icons/userPhoto.png')} />
            </View>
          </TouchableHighlight>
        </View>
        <Formik
          initialValues={{
            userName: '',
            fullName: '',
            department: '',
            communities: '',
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
              <Input
                title={'Department'}
                placeholder={'Enter your department'}
                value={values.department}
                onChangeText={handleChange('department')}
              />
              <Input
                title={'Communities'}
                placeholder={'Enter your communities'}
                value={values.communities}
                onChangeText={handleChange('communities')}
                multiline
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
