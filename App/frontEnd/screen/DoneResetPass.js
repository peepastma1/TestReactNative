import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DoneResetPassScreen({ navigation }) {

  const resetpass = () => {
    console.log("reset password...");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Change icon to checkmark */}
      <Icon name="checkmark-circle-outline" size={150} color="#006633" style={styles.icon} />
      <Text style={styles.title}>สำเร็จ</Text>
      <Text style={styles.subtitle}>รีเซ็ทรหัสผ่านของคุณสำเร็จแล้ว</Text>
      <TouchableOpacity style={styles.doneButton} onPress={resetpass}>
        <Text style={styles.doneButtonText}>ตกลง</Text>
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
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 35,
  },
  doneButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 25,
  },
});
