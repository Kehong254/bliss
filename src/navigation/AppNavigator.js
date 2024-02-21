import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BodyScreen from '../screens/BodyScreen';
import LifeScreen from '../screens/LifeScreen';
import IdentityScreen from '../screens/IdentityScreen';
import SocietyScreen from '../screens/SocietyScreen';
import StuffScreen from '../screens/StuffScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Body" component={BodyScreen} />
      <Stack.Screen name="Life" component={LifeScreen} />
      <Stack.Screen name="Identity" component={IdentityScreen} />
      <Stack.Screen name="Society" component={SocietyScreen} />
      <Stack.Screen name="Stuff" component={StuffScreen} />
      {/* Add screens for each theme (Body, Life, Identity, Society, Stuff) here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
