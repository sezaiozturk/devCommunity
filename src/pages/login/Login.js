import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from './Login.style'
import Input from '../../components/Input'
import BoxContainer from '../../components/BoxContainer'
import Button from "../../components/Button";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Log in</Text>
        </View>
        <View >
            <BoxContainer style={styles.boxContainer}>
                <View style={{gap:30}}> 
                    <Input title="Email" placeholder={"Enter your email"}/>
                    <Input title="Pssword" placeholder={"Enter your password"}/>
                    <Button title={"Log in"}/>
                    <Text style={styles.question}>Log in with existing account?</Text>
                    <View style={styles.logoContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../icons/google.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../icons/google.png')}
                                style={styles.logo}
                            />
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Don’t have an account?</Text>
                        <Text style={styles.route}>Sign up</Text>
                    </View>
                </View>
            </BoxContainer>
        </View>
    </SafeAreaView>
  );
};

export default Login;
