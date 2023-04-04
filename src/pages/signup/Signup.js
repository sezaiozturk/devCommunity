import { View, Text ,SafeAreaView,Image} from "react-native";
import React from "react";
import styles from './Signup.style'
import Input from '../../components/Input'
import BoxContainer from '../../components/BoxContainer'
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign up</Text>
        </View>
        <View style={styles.boxContainer}>
            <BoxContainer>
                <View style={{gap:30}}> 
                    <Input title="Email" placeholder={"Enter your email"}/>
                    <Input title="Password" placeholder={"Enter your password"} secure/>
                    <Input title="Password(Again)" placeholder={"Enter your password"} secure/>
                    <Button title={"Sign up"}/>
                    <Text style={styles.question}>Continue with existing account ?</Text>
                    <View style={styles.logoContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../icons/google.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name={"apple"} size={30} color='white'/>
                        </View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>Already have an account?</Text>
                        <Text style={styles.route}>Log in</Text>
                    </View>
                </View>
            </BoxContainer>
        </View>
    </SafeAreaView>
  );
};

export default Signup;
