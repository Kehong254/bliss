import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen'; 

describe('HomeScreen', () => {
  it('navigates to the correct theme screen when a theme button is pressed', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);
    
    // Simulate pressing the button 
    fireEvent.press(getByText('Body'));
    fireEvent.press(getByText('Life'));
    fireEvent.press(getByText('Identity'));
    fireEvent.press(getByText('Society'));
    fireEvent.press(getByText('Stuff'));
    
    // Ensure that navigation was called with the correct screen name
    expect(mockNavigate).toHaveBeenCalledWith('Body');
    expect(mockNavigate).toHaveBeenCalledWith('Life');
    expect(mockNavigate).toHaveBeenCalledWith('Identity');
    expect(mockNavigate).toHaveBeenCalledWith('Society');
    expect(mockNavigate).toHaveBeenCalledWith('Stuff');
  });
});
