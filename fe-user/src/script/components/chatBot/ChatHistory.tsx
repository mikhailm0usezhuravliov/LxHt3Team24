import { useAppSelector } from '../../hooks';
import { MessageData } from '../../models/form.model';

const ChatHistory = () => {
  const { messagesArr } = useAppSelector((state) => state.message);

  return (
    <div className="chat-bot__message">
      <div>
        {messagesArr.map((message: MessageData) => (
          <div key={message.date}>{message.text}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
