import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../assets/images/Logo.png';
import CustomInput from '../components/Custom_Input';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';


const ResetPassword = () => {

    const navigation = useNavigation();
    //both username and password should be state vars since they will be changing
    //setUsername and setPassword and automatically genereated updater functions
    const [confirmationCode, setConfirmationCode] = useState('')
    const [password, setPassword] = useState('')

    const onSignInPressed = () => {
        //direct user to sign up screen
        navigation.navigate('Login');

    }

    const onSubmitPressed = () => {
        //confirm code is correct 
        //change password in backend
        //redirect to login page
        navigation.navigate('Login');

    }

    return (
        //wrap whole thing in scroll view
        <LinearGradient colors={['#123EA6','#0947DA','#6D2FEC','#71319e']} style={styles.linearGradient}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset Your Password
                </Text>

                <View style={styles.containerInput}>
                    <View style={styles.textInputContainer}>
                        <CustomInput
                            value={confirmationCode}
                            setValue={setConfirmationCode}
                            placeholder="Enter Your Confirmation Code *"
                            secureTextEntry={false}
                        />

                        <CustomInput
                            value={password}
                            setValue={setPassword}
                            placeholder="Enter Your New Password *"
                            secureTextEntry={false}
                        />

                        <CustomButton
                            text="Submit"
                            //direct to 
                            onPress={onSubmitPressed}
                        />

                        <CustomButton
                            text="Back to Sign In"
                            // direct to login page
                            onPress={onSignInPressed}
                            type="TERTIARY"
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 75,
    },
    button: {
        backgroundColor: "#122F8E",
        padding: 10,
        borderRadius: 5,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
        width: 'auto',
    },
    link: {
        color: '#FDB075',
    },

    textInputContainer: {
        marginTop: 20, // Add space between the logo and text inputs
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    containerInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9400d3',
        margin: 10,
    }

});

export default ResetPassword;