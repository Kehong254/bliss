import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionCard from '../src/component/QuestionCard';

describe('QuestionCard', () => {
  it('Call onAnswerSubmit when the "Submit" button is pressed after input.', async () => {
    const mockOnAnswerSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <QuestionCard 
        question="Testing question" 
        onNext={() => {}} 
        onPrevious={() => {}} 
        onAnswerSubmit={mockOnAnswerSubmit} 
        cardId="test-1" 
      />
    );

    const input = getByPlaceholderText('Type your response here');
    fireEvent.changeText(input, 'test response');

    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);

    expect(mockOnAnswerSubmit).toHaveBeenCalled();
  });
  
  
});

