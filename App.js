import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
  
      if (finalStatus === 'granted') {
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        console.log('Calling schedulePushNotification');
        await schedulePushNotification();
  
        // Show a success toast when notification permission is granted
        Toast.show({
          type: 'success',
          text1: 'Notification Enabled',
          text2: 'You will receive reminders for self-reflection.',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Permission Denied',
          text2: 'Unable to receive push notifications!',
        });
      }
    } else {
      Toast.show({
        type: 'info',
        text1: 'Physical Device Required',
        text2: 'Push notifications require a physical device.',
      });
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  

  async function schedulePushNotification() {
    console.log('schedulePushNotification is called');
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Time for self-reflection",
          body: 'Open the app to start your reflection.',
        },
        trigger: {
          seconds: 10,
        },
      });
  
      Toast.show({
        type: 'success',
        text1: 'Notification Scheduled',
        text2: 'You will be notified in 10 seconds.',
      });
  
      console.log('Notification scheduled');
    } catch (error) {
      console.error('Error scheduling notification', error);
  
      Toast.show({
        type: 'error',
        text1: 'Failed to Schedule Notification',
        text2: 'Please try again later.',
      });
    }
  }
  
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;