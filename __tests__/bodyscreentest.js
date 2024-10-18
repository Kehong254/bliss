import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BodyScreen from '../src/screens/BodyScreen';   
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('BodyScreen Tests', () => {

    it('renders the first question and handles answer submission correctly', async () => {
      const mockNavigate = jest.fn();
      const { getByTestId, getByPlaceholderText, getByText,queryByText } = render(<BodyScreen navigation={{ navigate: mockNavigate }} />);

  
      // As the issue is now displayed as an image, we need to check that the image of the issue is rendered correctly
      expect(getByTestId("image-q1-1")).toBeTruthy();

  
    // Check that the "Next" button is disabled before submission
    // Note: This assumes that the button's disabled state is reflected in the style.
    expect(queryByText("Next").props.style).toContainEqual({ color: '#aaa' }); // 禁用时文本颜色为#aaa
  
    // Mock Answer Submission Process
    const input = getByPlaceholderText("Type your response here");
    fireEvent.changeText(input, "My answer");
    fireEvent.press(getByText("Submit"));
  
    // Waiting for an asynchronous operation to complete
    await waitFor(() => expect(AsyncStorage.setItem).toHaveBeenCalled(), {
      timeout: 10000 // Adjust the timeout to ensure it is long enough
    });
  
    // Check that the "Next" button is available after submission.
    expect(queryByText("Next").props.style).toContainEqual({ color: '#fff' }); // 启用时文本颜色为#fff
  
    // The "Previous" button is always available, just check if it exists!
    expect(queryByText("Previous")).toBeTruthy(); 
  });
  

   });





