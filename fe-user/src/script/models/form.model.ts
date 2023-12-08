export type FormValues = {
  message: string;
};

export type MessageState = {
  messagesArr: MessageData[];
};

export type MessageData = {
  date: number;
  author: string;
  isUser: boolean;
  text: string;
};
