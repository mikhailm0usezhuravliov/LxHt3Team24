import { createSlice } from '@reduxjs/toolkit';
import { MessageState } from '../models/form.model';

const initialState: MessageState = {
  messagesArr: ['Доброго дня! Чим можу допомогти?'],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage(state, action) {
      const newMessagesArr: string[] = [...state.messagesArr];
      newMessagesArr.push(action.payload);
      return { ...state, messagesArr: newMessagesArr };
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
