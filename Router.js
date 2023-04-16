import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import ForgotPassword from './src/pages/forgotPassword';
import Post from './src/pages/post';
import ProfileSettings from './src/pages/profileSettings';
import Profile from './src/pages/profile';
import Member from './src/pages/members';
import Gallery from './src/pages/gallery';
import Admin from './src/pages/admin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

async function control() {
  const member = await firestore()
    .collection('Members')
    .doc(auth().currentUser.uid)
    .get();
}

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignupScreen" component={Signup} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettings} />
    </Stack.Navigator>
  );
};
const MemberTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="PostScreen"
        component={Post}
        options={{title: 'Activities'}}
      />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen
        name="GalleryScreen"
        component={Gallery}
        options={{title: 'Gallery'}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Tab.Screen
        name="AdminScreen"
        component={Admin}
        options={{title: 'Post Share'}}
      />
    </Tab.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MemberTab" component={MemberTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
