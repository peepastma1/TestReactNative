import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ConditionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>เงื่อนไขการใช้งาน</Text>
      <Text style={styles.conditions}>
        กรุณาอ่านเงื่อนไขการใช้งานอย่างละเอียด ก่อนที่คุณจะใช้แอปพลิเคชันนี้
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="ปฏิเสธ"
          onPress={() => {
            console.log("User declined the terms");
            navigation.navigate("Home");
          }}
        />
        <Button
          title="ยอมรับ"
          onPress={() => {
            console.log("User accepted the terms");
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  conditions: {
    fontSize: 16,
    marginBottom: 40, 
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
