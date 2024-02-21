import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Circle component to be used outside TouchableOpacity
const Circle = ({ color, text }) => (
  <View style={styles.circleContainer}>
    <View style={[styles.circle, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text.charAt(0)}</Text>
    </View>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const themes = [
    { name: 'Body', color: '#fed905' },
    { name: 'Life', color: '#f9b026' },
    { name: 'Identity', color: '#f18538' },
    { name: 'Society', color: '#ec604f' },
    { name: 'Stuff', color: '#e83c62' },
  ];

  const navigateToTheme = (theme) => {
    // Navigate to the respective theme screen
    // For demonstration, we'll navigate to screens with names like BodyScreen, LifeScreen, etc.
    navigation.navigate(`${theme}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BLISS BUSKER FUN CARD</Text>
      {themes.map((theme, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Circle color={theme.color} text={theme.name} />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.color }]}
            onPress={() => navigateToTheme(theme.name)}
          >
            <Text style={styles.buttonText}>{theme.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f27437',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 25,
    fontFamily: 'san-serif'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 15,
    width: 200,
    alignItems: 'center',
  },
  circleContainer: {
    marginRight: 15,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default HomeScreen;