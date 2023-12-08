import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../models/form.model';
import ChatHistory from './ChatHistory';

const ChatBot = ({ closeBot }: { closeBot: () => void }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({ mode: 'onSubmit' });

  const closeChatBot = () => {
    closeBot();
  };

  const handleSubmitForm: SubmitHandler<FormValues> = (data) => {
    const { message } = data;

    console.log('send request', message);
    reset();
  };

  return (
    <div className="chat-bot">
      <div>
        <button onClick={closeChatBot}>X</button>
      </div>
      <h4>ChatBot</h4>
      <ChatHistory />
      <form className="chat-bot__form" onSubmit={handleSubmit(handleSubmitForm)}>
        <input className="chat-bot__input" type="text" {...register('message')} />
        <button type="submit" className="chat-bot__submit">
          {'>'}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
