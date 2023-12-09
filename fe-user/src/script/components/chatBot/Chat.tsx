import { MouseEventHandler, useState } from 'react';
import ChatBot from './ChatBot';

const Chat = () => {
  const [isShowButtons, setIsShowButtons] = useState(false);
  const [isShowBot, setIsShowBot] = useState(false);

  const handleMouseOver: MouseEventHandler = () => {
    setIsShowButtons(true);
  };

  const handleMouseOut: MouseEventHandler = () => {
    setIsShowButtons(false);
  };

  const openBot: MouseEventHandler<HTMLButtonElement> = () => {
    setIsShowBot(true);
  };

  const closeBot = (): void => {
    setIsShowBot(false);
    setIsShowButtons(false);
  };

  return (
    <div className="chat" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isShowBot && <ChatBot closeBot={closeBot} />}
      {isShowButtons && !isShowBot && (
        <div>
          <button className="chat__button">
            <a
              className="chat__link"
              href="https://t.me/Diia_help_bot?start=X3VybD0lMkZsaW5rJmQ9Mg"
            >
              telegram
            </a>
          </button>
        </div>
      )}
      {!isShowBot && (
        <button className="chat__button" onClick={openBot}>
          chat
        </button>
      )}
    </div>
  );
};

export default Chat;
