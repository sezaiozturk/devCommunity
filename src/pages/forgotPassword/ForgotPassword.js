import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ForgotPassword.style';
import Input from '../../components/Input';
import BoxContainer from '../../components/BoxContainer';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({navigation}) => {
  function handleForgotPassword({email}) {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigation.navigate('LoginScreen');
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Forgot</Text>
        <Text style={styles.title}>Password</Text>
      </View>
      <View style={styles.boxContainer}>
        <BoxContainer>
          <View style={{gap: 30}}>
            <Formik initialValues={{email: ''}} onSubmit={handleForgotPassword}>
              {({handleChange, handleSubmit, values}) => (
                <View>
                  <Input
                    title="Email"
                    placeholder={'Enter your email'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                  />
                  <Button title={'Send'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>I remember my password</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.route}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.space} />
        </BoxContainer>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
