import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OtpScreen({ navigation }) {
  const phoneNumber = '065-xxx-2323';

  const requestOtp = () => {
    console.log("Requesting OTP...");
    navigation.navigate("VerifyOtp");
  };

  return (
    <View style={styles.container}>
       <Icon name="lock-closed-outline" size={50} color="#006633" style={styles.icon} />
      <Text style={styles.title}>OTP จะถูกส่งไปยังเบอร์</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>

      <TouchableOpacity style={styles.otpButton} onPress={requestOtp}>
        <Text style={styles.otpButtonText}>ขอรหัส OTP</Text>
      </TouchableOpacity>

      <Text style={styles.contactInfo}>
        กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อ 02-222-2222
      </Text>
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
  phoneNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: Dimensions.get("window").height * 0.1,
  },
  contactInfo: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
  otpButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 0,
  },
  icon: {
    marginBottom: Dimensions.get("window").height * 0.1,
  },
});
