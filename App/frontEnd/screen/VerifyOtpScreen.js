import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function VerifyOtpScreen({ navigation }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(60);
    const [isTimerActive, setIsTimerActive] = useState(false);
  
    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text.replace(/[^0-9]/g, '');
        setOtp(newOtp);

        if (text.length === 1 && index < 5) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.every(digit => digit !== '')) {
            navigation.navigate("CreatePin");
        }
    };
  
    const requestNewOtp = () => {
        if (!isTimerActive) {
            console.log("Requesting new OTP...");
            setTimer(60);
            setIsTimerActive(true);
        }
    };

    useEffect(() => {
        let interval = null;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(interval);
            setIsTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ยืนยันตัวตน</Text>
            <Text style={styles.instruction}>กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ</Text>
            <Text style={styles.phoneNumber}>065-xxx-2323</Text>
  
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(text) => handleOtpChange(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                ))}
            </View>

            <Text style={styles.instruction}>หากคุณไม่ได้รหัส</Text>

            <TouchableOpacity onPress={requestNewOtp} disabled={isTimerActive}>
                <Text style={styles.requestNewOtpText}>
                    {isTimerActive ? `ส่งรหัสใหม่ (${timer}s)` : 'ส่งรหัสใหม่'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    instruction: {
        fontSize: 18,
        marginBottom: 5,
    },
    phoneNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 100,
        marginTop: 50,
    },
    otpInput: {
      width: Dimensions.get("window").width * 0.12,
      height: 50,
      backgroundColor: 'grey',
      textAlign: 'center',
      fontSize: 18,
      borderWidth: 0,
      borderRadius: 5,
  },
    requestNewOtpText: {
        color: '#006633',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
});
