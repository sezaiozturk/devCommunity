import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/login";
import Signup from "./src/pages/signup";
import ForgotPassword from "./src/pages/forgotPassword";

const Stack=createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={Login}/>
        <Stack.Screen name="SignupScreen" component={Signup}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
