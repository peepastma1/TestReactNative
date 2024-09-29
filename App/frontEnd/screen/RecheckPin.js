import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');
const keyCircleSize = width * 0.2;

const RecheckPinScreen = ({ route, navigation }) => {
  const { pin } = route.params;
  const [confirmedPin, setConfirmedPin] = useState(["", "", "", "", "", ""]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePinPress = (number) => {
    if (currentIndex < 6) {
      const newPin = [...confirmedPin];
      newPin[currentIndex] = number;
      setConfirmedPin(newPin);
      setCurrentIndex(currentIndex + 1);

      if (currentIndex + 1 === 6) {
        if (newPin.join("") === pin.join("")) {
          // alert("PINs match next step.");
          navigation.navigate("ScanFinger");
        } else {
          alert("PINs do not match. Please try again.");
          setConfirmedPin(["", "", "", "", "", ""]);
          setCurrentIndex(0);
        }
      }
    }
  };

  const handleDelete = () => {
    if (currentIndex > 0) {
      const newPin = [...confirmedPin];
      newPin[currentIndex - 1] = "";
      setConfirmedPin(newPin);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const numberButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recheck PIN Code</Text>
      <Text style={styles.info}>Please enter the PIN you just set:</Text>

      <View style={styles.circleContainer}>
        {confirmedPin.map((digit, index) => (
          <View
            key={index}
            style={[styles.circle, digit !== "" ? styles.filled : styles.empty]}
          />
        ))}
      </View>

      <View style={styles.keypad}>
        {numberButtons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((number) => (
              <TouchableOpacity
                key={number}
                style={styles.key}
                onPress={() => handlePinPress(number)}
              >
                <View style={styles.keyCircle}>
                  <Text style={styles.keyText}>{number}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <View
              style={[
                styles.keyCircle,
                { borderWidth: 0, backgroundColor: "transparent" },
              ]}
            >
              <Text style={styles.keyText}></Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.key}
            onPress={() => handlePinPress(0)}
          >
            <View style={styles.keyCircle}>
              <Text style={styles.keyText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={handleDelete}>
            <View
              style={[
                styles.keyCircle,
                { borderWidth: 0, backgroundColor: "transparent" },
              ]}
            >
              <Ionicons name="backspace-outline" size={50} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "transparent",
  },
  filled: {
    backgroundColor: "#006633",
    borderWidth: 0,
  },
  empty: {
    backgroundColor: "transparent",
  },
  keypad: {
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  keyCircle: {
    width: keyCircleSize,
    height: keyCircleSize,
    borderRadius: keyCircleSize/2,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  key: {
    width: "30%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  keyText: {
    fontSize: 24,
  },
});

export default RecheckPinScreen;
