import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuestionCard = ({ question, onNext }) => {
  const [response, setResponse] = useState('');
  const [responsesList, setResponsesList] = useState([]);

  // Loading saved answers
  useEffect(() => {
    const loadResponses = async () => {
      try {
        const savedResponses = await AsyncStorage.getItem('responses');
        if (savedResponses !== null) {
          setResponsesList(JSON.parse(savedResponses));
        }
      } catch (error) {
        console.error('Error loading saved responses:', error);
      }
    };

    loadResponses();
  }, []);

  // Submit an answer
  const handleSubmit = async () => {
    try {
      const newResponse = { response, timestamp: new Date() };
      const updatedResponsesList = [...responsesList, newResponse];
      await AsyncStorage.setItem('responses', JSON.stringify(updatedResponsesList));
      console.log('Saved responses:', updatedResponsesList); // Add this line of code to confirm the save
      setResponsesList(updatedResponsesList);
      setResponse(''); // Clear response
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };
  

  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your response here"
        value={response}
        onChangeText={setResponse}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {responsesList.map((item, index) => (
        <View key={index} style={styles.savedResponseContainer}>
          <Text style={styles.savedResponseText}>{item.response}</Text>
          <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
        </View>
      ))}
    </View>
  );
};

const formatTimestamp = (timestamp) => {
  let date = timestamp;
  if (!(timestamp instanceof Date)) {
    date = new Date(timestamp);
  }
  if (isNaN(date)) {
    console.error('Invalid date:', timestamp);
    return 'Invalid date';
  }
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fed905',
    borderRadius: 8,
    padding: 20,
    elevation: 3,
    marginBottom: 20,
    width: '100%',
    height: '100%',
    flex: 1,  
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  responseSection: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#27ae60',
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  savedResponseContainer: {
    marginBottom: 8,
  },
  savedResponseText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
});

export default QuestionCard;
