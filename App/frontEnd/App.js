import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screen/Login';
import ChooseLangScreen from './screen/ChooseLang';
import OtpScreen from './screen/SendOTP';
import VerifyOtpScreen from './screen/VerifyOtpScreen';
import CreatePinScreen from './screen/CreatePin';
import RecheckPinScreen from './screen/RecheckPin';
import ScanFingerScreen from './screen/ScanFinger';
import PinScreen from './screen/Pin';
import ForgotPassScreen from './screen/ForgotPass';
import DoneResetPassScreen from './screen/DoneResetPass';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ChooseLang')}>
      <Text>App for testing Tap anywhere to go to Next Screen</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChooseLang" component={ChooseLangScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SendOTP" component={OtpScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
        <Stack.Screen name="CreatePin" component={CreatePinScreen} />
        <Stack.Screen name="RecheckPin" component={RecheckPinScreen} />
        <Stack.Screen name="ScanFinger" component={ScanFingerScreen} />
        <Stack.Screen name="Pin" component={PinScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        <Stack.Screen name="DoneResetPass" component={DoneResetPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006633',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
