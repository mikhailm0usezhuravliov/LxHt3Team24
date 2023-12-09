import { createSlice } from '@reduxjs/toolkit';
import { MessageData, MessageState } from '../models/form.model';

const initialState: MessageState = {
  messagesArr: [
    {
      date: Date.now(),
      author: 'Bot',
      isUser: false,
      text: 'Доброго дня! Чим можу допомогти?',
    },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage(state, action) {
      const newMessagesArr: MessageData[] = [...state.messagesArr];
      newMessagesArr.push(action.payload);
      return { ...state, messagesArr: newMessagesArr };
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
