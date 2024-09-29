import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ScanFingerScreen({ navigation }) {

  const fingerprint = () => {
    console.log("checking...");
  };

  const nextnext = () => {
        console.log("go next");
        navigation.navigate("Pin");
};

  return (
    <View style={styles.container}>
      <Text style={[styles.headtitle, styles.alignLeft]}>Touch ID</Text>
      <Text style={[styles.title, styles.alignLeft, { marginBottom: 0 }]}>
        ตั้งค่าการล็อกอินด้วยลายนิ้วมือ
      </Text>
      <Text style={[styles.title, styles.alignLeft, { marginBottom: Dimensions.get("window").height * 0.15 }]}>
        เพื่อการเข้าถึงที่รวดเร็วขึ้น
      </Text>
      <Icon
        name="finger-print"
        size={100}
        color="#006633"
        style={[styles.icon, , { marginBottom: Dimensions.get("window").height * 0.15 }]}
      />

      <TouchableOpacity style={styles.otpButton} onPress={fingerprint}>
        <Text style={styles.fingerButtonText}>ตั้งค่าลายนิ้วมือ</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={nextnext}>
        <Text style={styles.requestNewOtpText}>
          ข้าม
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
  contactInfo: {
    marginTop: 50,
    textAlign: "center",
    color: "gray",
  },
  otpButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fingerButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
    width: "80%",
  },
  icon: {
    marginBottom: 25,
  },
  requestNewOtpText: {
    color: '#006633',
    fontSize: 18,
},
});
