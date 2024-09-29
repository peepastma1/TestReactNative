import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "กรุณาใส่ชื่อผู้ใช้งานและรหัสผ่าน");
    } else {
      console.log("User logged in");
      navigation.navigate("SendOTP");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="ชื่อผู้ใช้งาน"
        placeholderTextColor="#A9A9A9"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="รหัสผ่าน"
        secureTextEntry
        placeholderTextColor="#A9A9A9"
      />

      <View style={styles.rememberContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={rememberMe ? styles.checked : styles.unchecked} />
        </TouchableOpacity>
        <Text style={styles.rememberText}>จดจำรหัสผ่าน</Text>

        <TouchableOpacity
          onPress={() => {
            console.log("Forgot password pressed");
            navigation.navigate("ForgotPass");
          }}
        >
          <Text style={styles.link}>ลืมรหัสผ่าน?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>- ไม่มีบัญชีผู้ใช้ -</Text>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          console.log("User wants to register");
        }}
      >
        <Text style={styles.registerButtonText}>
          เปิดบัญชีเพื่อลงทะเบียนผู้ใช้
        </Text>
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
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    width: 16,
    height: 16,
    backgroundColor: "#006633",
    borderRadius: 3,
  },
  unchecked: {
    width: 16,
    height: 16,
    backgroundColor: "transparent",
  },
  link: {
    color: "#006633",
    textDecorationLine: "underline",
  },
  rememberText: {
    flex: 1,
    color: "gray",
  },
  registerText: {
    marginTop: 20,
    marginBottom: 20,
    color: "gray",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 0,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 0,
    borderWidth: 2,
    borderColor: "#006633",
  },
  registerButtonText: {
    color: "#006633",
    fontSize: 16,
    fontWeight: "bold",
  },
});
