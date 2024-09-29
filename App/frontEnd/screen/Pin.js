import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const keyCircleSize = width * 0.2;

const PinScreen = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    showTouchIdAlert();
  }, []);

  const showTouchIdAlert = () => {
    Alert.alert(
      'Touch ID for "CGS application"',
      'เข้างานด้วย Touch ID หรือ กลับไปใช้รหัส PIN',
      [
        {
          text: 'ENTER PASSWORD',
          onPress: () => console.log('User pressed ENTER PASSWORD'),
        },
        {
          text: 'ยกเลิก',
          onPress: () => console.log('User pressed Cancel'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const handlePinPress = (number) => {
    if (currentIndex < 6) {
      const newPin = [...pin];
      newPin[currentIndex] = number; 
      setPin(newPin);
      setCurrentIndex(currentIndex + 1);


      if (currentIndex + 1 === 6) {
        console.log("PIN entered:", newPin.join(''));
        // navigation.navigate('RecheckPin', { pin: newPin });
      }
    }
  };

  const handleDelete = () => {
    if (currentIndex > 0) {
      const newPin = [...pin];
      newPin[currentIndex - 1] = '';
      setPin(newPin);
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
      <Text style={styles.title}>Set PIN Code</Text>

      <View style={styles.circleContainer}>
        {pin.map((digit, index) => (
          <View 
            key={index} 
            style={[styles.circle, digit !== '' ? styles.filled : styles.empty]}
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
          <TouchableOpacity style={styles.key} >
            <View style={[styles.keyCircle, {borderWidth: 0, backgroundColor: 'transparent'}]}>
              <Text style={styles.keyText}></Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => handlePinPress(0)}>
            <View style={styles.keyCircle}>
              <Text style={styles.keyText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={handleDelete}>
            <View style={[styles.keyCircle, {borderWidth: 0, backgroundColor: 'transparent'}]}>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 50,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'transparent',
  },
  filled: {
    backgroundColor: '#006633',
    borderWidth: 0,
  },
  empty: {
    backgroundColor: 'transparent',
  },
  keypad: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  key: {
    width: '30%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyCircle: {
    width: keyCircleSize,
    height: keyCircleSize,
    borderRadius: keyCircleSize/2,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 24,
  },
});

export default PinScreen;
