import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import ForgotPassword from './src/pages/forgotPassword';
import Post from './src/pages/post';
import ProfileSettings from './src/pages/profileSettings';
import Profile from './src/pages/profile';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignupScreen" component={Signup} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen
          name="ProfileSettingsScreen"
          component={ProfileSettings}
        />
        <Stack.Screen name="PostScreen" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
