import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Signup.style';
import Input from '../../components/Input';
import BoxContainer from '../../components/BoxContainer';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  function handleSignup({email, password, rePassword}) {
    if (password === rePassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign up</Text>
      </View>
      <View style={styles.boxContainer}>
        <BoxContainer>
          <View style={{gap: 30}}>
            <Formik
              initialValues={{email: '', password: '', rePassword: ''}}
              onSubmit={handleSignup}>
              {({handleChange, handleSubmit, values}) => (
                <View>
                  <Input
                    title="Email"
                    placeholder={'Enter your email'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                  />
                  <Input
                    title="Password"
                    placeholder={'Enter your password'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secure
                  />
                  <Input
                    title="Password"
                    placeholder={'Enter your password'}
                    value={values.rePassword}
                    onChangeText={handleChange('rePassword')}
                    secure
                  />
                  <Button title={'Sign up'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <Text style={styles.question}>
              Continue with existing account ?
            </Text>
            <View style={styles.logoContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../assets/icons/google.png')}
                  style={styles.logo}
                />
              </View>
              <View style={styles.iconContainer}>
                <Icon name={'apple'} size={30} color="white" />
              </View>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.route}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BoxContainer>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
