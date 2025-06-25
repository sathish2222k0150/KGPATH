import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import { Message } from '../Data/chatbot';
import { chatBotConfig, initialMessages, getBotResponse } from '../Data/chatbot';
import KGLOGO from '../../assets/Rectangle.png';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response with realistic delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-teal-50 border border-teal-600 hover:opacity-90 transition-all duration-300 rounded-full p-4 shadow-lg hover:shadow-xl shadow-teal-100 transform hover:scale-105"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-teal-600" />
          ) : (
            <img
          src={KGLOGO}
          alt="Chat icon"
          className="w-14 h-14 object-cover rounded-full"
        />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-200 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-primary p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src={KGLOGO} className="h-10 w-10 text-teal-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">{chatBotConfig.title}</h3>
              <p className="text-teal-100 text-sm">{chatBotConfig.subtitle}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-gradient-secondary text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <img src={KGLOGO} className="h-6 w-8 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isUser ? 'text-orange-100' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-4 py-3 border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={chatBotConfig.placeholderText}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  rows={1}
                  style={{ minHeight: '48px', maxHeight: '96px' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="bg-gradient-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 rounded-xl p-3 shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label="Send message"
              >
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-4 py-2 text-center">
            <p className="text-xs text-gray-500">
              {chatBotConfig.poweredByText.split(' ').slice(0, -2).join(' ')}
              <span className="ml-1 font-semibold  bg-clip-text text-orange-600">
                {chatBotConfig.poweredByText.split(' ').slice(-2).join(' ')}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;



