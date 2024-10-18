import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Keyboard, StyleSheet, Alert  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuestionCard = ({ questionImage,  onNext, cardId, onAnswerSubmit,onPrevious,cardBackgroundColor }) => {
  const [response, setResponse] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [responsesList, setResponsesList] = useState([]);

  const [isInputFocused, setInputFocused] = useState(false);
  // Building Dynamic Key Names Using Categories
  //const responsesKey = `responses_${cardId}`;

  // Function to delete an answer
  const handleDeleteResponse = async (index) => {
    const responsesKey = `responses_${cardId}`; // define responsesKey
    const updatedResponsesList = responsesList.filter((_, i) => i !== index);
    try {
      await AsyncStorage.setItem(responsesKey, JSON.stringify(updatedResponsesList));
      setResponsesList(updatedResponsesList);
    } catch (error) {
      console.error('Error updating responses:', error);
    }
  };

  // Loading saved answers
  useEffect(() => {
    const loadResponses = async () => {
      const responsesKey = `responses_${cardId}`;
      try {
        const savedResponses = await AsyncStorage.getItem(responsesKey);
        if (savedResponses !== null) {
          setResponsesList(JSON.parse(savedResponses));
        } else {
          setResponsesList([]);
        }
      } catch (error) {
        console.error('Error loading responses:', error);
      }
    };
  
    loadResponses();
  }, [cardId]); // The dependency is 'cardId', which means that 'useEffect' will be re-run whenever 'cardId' is changed.


  // Submit an answer
  const handleSubmit = async () => {
    const responsesKey = `responses_${cardId}`;
    const newResponse = { response, timestamp: new Date().toISOString() };
    const updatedResponsesList = [...responsesList, newResponse];
    if (!response.trim()) {
      Alert.alert('Error', 'Please submit your response before proceeding.'); // Display an alert if response is empty
      return; // Return early to prevent further execution
    }
    setIsAnswerSubmitted(true);
    onAnswerSubmit(); // Notify parent component that the answer has been submitted
    try {
      await AsyncStorage.setItem(responsesKey, JSON.stringify(updatedResponsesList));
      setResponsesList(updatedResponsesList);
      setResponse('');
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };
  
  const logAllResponses = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const allResponses = await AsyncStorage.multiGet(keys);
      const responses = allResponses
        .filter(([key, value]) => key.startsWith('responses_'))
        .map(([key, value]) => ({ key, value: JSON.parse(value) }));
      
      console.log('All Responses:');
      responses.forEach(({ key, value }) => {
        console.log(`${key}: ${value.map(v => v.response).join(', ')}`);
      });
    } catch (error) {
      console.error('Error logging all responses:', error);
    }
  };

  // 输入框获得焦点时的处理函数
  const handleInputFocus = () => setInputFocused(true);

  // 输入框失去焦点时的处理函数
  const handleInputBlur = () => setInputFocused(false);

  // 根据输入框焦点状态动态调整图片高度
  const dynamicImageStyle = isInputFocused ? { height: 250 } : { height: 500 };

  


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={true}>
      <View style={[styles.card, { backgroundColor: cardBackgroundColor || '#9B59B0' }]}> 
        {/* Dynamically adjust the image style according to the focus state of the input box */}
        <Image
          source={questionImage}
          testID={`image-${cardId}`} // 动态设置 testID
          style={[styles.questionImage, isInputFocused ? { height: 250 } : { height: 500 }]} // 使用isInputFocused
        />
      
        {/*<Text style={styles.questionText}>{question}</Text>*/}
        {/* Input for response */}
        {/* 在TextInput组件中使用onFocus和onBlur来更新输入框焦点状态 */}
        <TextInput
          style={[styles.input, isInputFocused && { marginTop: 20 }]} // 根据焦点状态调整输入框的位置
          placeholder="Type your response here"
          value={response}
          onChangeText={setResponse}
          multiline
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <View style={styles.buttonContainer}>
          {/* Previous按钮 */}
          <TouchableOpacity style={styles.previousButton} onPress={onPrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          {/* Submit按钮 */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          {/* Next按钮 */}
          <TouchableOpacity style={styles.nextButton} onPress={onNext} disabled={!isAnswerSubmitted}>
            <Text style={[styles.buttonText, { color: isAnswerSubmitted ? '#fff' : '#aaa' }]}>Next</Text>
          </TouchableOpacity>
        </View >
            {responsesList.map((item, index) => (
              <View key={index} style={styles.savedResponseContainer}>
                <View style={styles.commentContainer}>
                  <Text style={styles.savedResponseText}>{item.response}</Text>
                  <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
                </View> 
                {/* Delete button */}
                <TouchableOpacity onPress={() => handleDeleteResponse(index)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>  
          ))}
      </View>
    </ScrollView>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#9B59B0',
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  previousButton: {
    backgroundColor: '#95a5a6', // 可以选择一个不同的颜色
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 5, // 为了一致性，确保左右按钮之间的空隙相等
  },
  submitButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#27ae60',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginLeft: 5
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },


  savedResponseContainer: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  commentContainer: {
    flex: 1,
    marginRight: 10,
  },
  savedResponseText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    width: 60,
    marginLeft: 10,
    // Add other styles you need
  },
  deleteButtonText: {
    color: '#fff',
    // Add other styles you need
  },

  questionImage: {
    width: '100%',
    height: 500, // adjust height according to your image aspect ratio
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default QuestionCard;