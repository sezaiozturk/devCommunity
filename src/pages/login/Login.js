import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import BoxContainer from '../../components/BoxContainer';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  function handleLogin(values) {
    console.log(values.password);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Log in</Text>
      </View>
      <View style={styles.boxContainer}>
        <BoxContainer>
          <View style={{gap: 30}}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleLogin}>
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
                  <Button title={'Log in'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <Text style={styles.question}>Log in with existing account?</Text>
            <View style={styles.logoContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../icons/google.png')}
                  style={styles.logo}
                />
              </View>
              <View style={styles.iconContainer}>
                <Icon name={'apple'} size={30} color="white" />
              </View>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={styles.route}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>Forgot your password ?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                <Text style={styles.route}>Forgot password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BoxContainer>
      </View>
    </SafeAreaView>
  );
};

export default Login;
