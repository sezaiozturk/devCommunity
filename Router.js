import React from 'react';
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Screen
        name="MemberScreen"
        component={Member}
        options={{title: 'Members'}}
      />
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
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MemberTab" component={MemberTab} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
