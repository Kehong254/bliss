import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

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
      // Request notification permissions and get a token
      if (finalStatus === 'granted') {
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        console.log('Calling schedulePushNotification'); 
        await schedulePushNotification(); // notice of programme
      } else {
        alert('Failed to get push token for push notification!');
      }
    } else {
      alert('Must use physical device for Push Notifications');
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
    console.log('schedulePushNotification is called'); // This will print a message on the console
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Time for self-reflection",
          body: 'Open the app to start your reflection.',
        },
        trigger: {
          seconds: 10, // Triggered after 10 seconds
        },
      });
      console.log('Notification scheduled'); // If the notification was successfully scheduled, print the
    } catch (error) {
      console.error('Error scheduling notification', error); // If an error occurs, print
    }
  }
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;