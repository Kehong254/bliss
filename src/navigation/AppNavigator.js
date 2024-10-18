import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity,Text,View  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import BodyScreen from '../screens/BodyScreen';
import LifeScreen from '../screens/LifeScreen';
import IdentityScreen from '../screens/IdentityScreen';
import SocietyScreen from '../screens/SocietyScreen';
import StuffScreen from '../screens/StuffScreen';
import UserManualScreen from '../screens/UserManualScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('UserManual')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: 'black' }}>Help</Text>
                <Ionicons name="information-circle-outline" size={24} color="black" style={{ marginLeft: 5 }} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Body" component={BodyScreen} />
      <Stack.Screen name="Life" component={LifeScreen} />
      <Stack.Screen name="Identity" component={IdentityScreen} />
      <Stack.Screen name="Society" component={SocietyScreen} />
      <Stack.Screen name="Stuff" component={StuffScreen} />
      <Stack.Screen name="UserManual" component={UserManualScreen} />
      {/* Add screens for each theme (Body, Life, Identity, Society, Stuff) here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;