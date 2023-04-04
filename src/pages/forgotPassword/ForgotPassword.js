import { View, Text ,SafeAreaView,Image} from "react-native";
import React from "react";
import styles from './ForgotPassword.style'
import Input from '../../components/Input'
import BoxContainer from '../../components/BoxContainer'
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Forgot</Text>
            <Text style={styles.title}>Password</Text>
        </View>
        <View style={styles.boxContainer}>
            <BoxContainer>
                <View style={{gap:30}}> 
                    <Input title="Email" placeholder={"Enter your email"}/>
                    <Button title={"Send"}/>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>I remember my password</Text>
                        <Text style={styles.route}>Sign up</Text>
                    </View>
                </View>
                <View style={styles.space}/>
            </BoxContainer>
        </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
