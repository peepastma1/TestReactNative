import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert
} from "react-native";

export default function ForgotPassScreen({ navigation }) {
  const [mail, setMail] = useState("");

  const handleReset = () => {
    if (!mail) {
      Alert.alert("Error", "กรุณาใส่อีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน");
    } else {
      console.log("Reset password");
      navigation.navigate("DoneResetPass");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headtitle, styles.alignLeft]}>ลืมรหัสผ่าน ?</Text>
      <Text style={[styles.title, styles.alignLeft, { marginBottom: 100 }]}>
        กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน
      </Text>
      <TextInput
        style={styles.input}
        value={mail}
        onChangeText={setMail}
        placeholder="อีเมล / เบอร์โทรศัพท์"
        placeholderTextColor="#A9A9A9"
      />

      <TouchableOpacity
        style={styles.resetButton}
        onPress={
          handleReset
        }
      >
        <Text style={styles.resetButtonText}>ส่ง</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  resetButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 0,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "left",
    width: "100%",
  },
  headtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    width: "100%",
  },
});
