import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SocietyScreen from '../src/screens/SocietyScreen';   
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('SocietyScreen', () => {

    it('renders the first question and handles answer submission correctly', async () => {
      const mockNavigate = jest.fn();
      const { getByTestId, getByPlaceholderText, getByText,queryByText } = render(<SocietyScreen navigation={{ navigate: mockNavigate }} />);

  
      // 由于问题现在是以图片形式展示，我们需要检查问题的图片是否正确渲染
      expect(getByTestId("image-q4-1")).toBeTruthy();

  
    // 检查"Next"按钮在提交前是禁用的
    // 注意: 这里假设通过样式（来反映按钮的禁用状态
    expect(queryByText("Next").props.style).toContainEqual({ color: '#aaa' }); // 禁用时文本颜色为#aaa
  
    // 模拟回答提交流程
    const input = getByPlaceholderText("Type your response here");
    fireEvent.changeText(input, "My answer");
    fireEvent.press(getByText("Submit"));
  
    // 等待异步操作完成
    await waitFor(() => expect(AsyncStorage.setItem).toHaveBeenCalled(), {
      timeout: 10000 // 调整超时时间，确保足够长
    });
  
    // 检查"Next"按钮在提交后是否可用
    expect(queryByText("Next").props.style).toContainEqual({ color: '#fff' }); // 启用时文本颜色为#fff
  
    // "Previous"按钮始终可用，检查它是否存在即可
    expect(queryByText("Previous")).toBeTruthy(); 
  });
  

   });