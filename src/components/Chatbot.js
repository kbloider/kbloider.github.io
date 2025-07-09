import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageCircle, FiX, FiBot } from 'react-icons/fi';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요! 다독다독 AI 챗봇입니다. 🤖\n책 추천, 영상 내용, 독서법 등 무엇이든 물어보세요!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    "안녕": "안녕하세요! 다독다독에 오신 것을 환영합니다! 😊",
    "책 추천": "어떤 장르의 책을 찾고 계신가요? 자기계발, 문학, 경제, 과학 등 다양한 분야의 책을 추천해드릴 수 있어요!",
    "독서법": "효과적인 독서법으로는 '능동적 읽기', '요약하며 읽기', '질문하며 읽기' 등이 있어요. 더 자세한 내용은 저희 영상을 참고해보세요!",
    "자기계발": "자기계발서로는 '인생을 바꾸는 독서의 힘', '아주 작은 습관의 힘', '원칙' 등을 추천드려요. 실천 가능한 내용들이 많답니다!",
    "소설": "최근 인기 소설로는 '82년생 김지영', '정의란 무엇인가', '미움받을 용기' 등이 있어요. 어떤 스타일의 소설을 선호하시나요?",
    "경제": "경제 입문서로는 '부의 추월차선', '돈의 속성', '경제학 콘서트' 등을 추천해요. 쉽게 읽히면서도 유익한 책들이에요!",
    "출연": "다독다독 출연에 관심이 있으시군요! 출연 문의는 contact@dadok.com으로 연락주시면 됩니다.",
    "협찬": "협찬 문의는 sponsor@dadok.com으로 보내주세요. 도서 협찬부터 다양한 협업이 가능합니다!",
    "광고": "광고 문의는 ad@dadok.com으로 연락주세요. 브랜드에 맞는 맞춤형 광고를 제안해드릴게요!"
  };

  const getResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key.toLowerCase())) {
        return response;
      }
    }
    
    return "흥미로운 질문이네요! 더 구체적인 답변을 위해서는 다독다독 유튜브 채널을 확인하시거나, contact@dadok.com으로 문의해주세요. 📚";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 봇 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "책 추천해주세요",
    "독서법 알려주세요",
    "자기계발서 추천",
    "출연 문의하기",
    "협찬 문의하기"
  ];

  return (
    <section className="chatbot-section section" id="chatbot">
      <div className="container">
        <div className="text-center mb-8">
          <h2>AI 북토크 챗봇</h2>
          <p>다독다독의 영상 내용을 기반으로 한 AI 챗봇과 대화해보세요</p>
        </div>
        
        <div className="chatbot-demo">
          <div className="chat-container">
            <div className="chat-header">
              <div className="bot-info">
                <FiBot size={24} />
                <div>
                  <h4>다독다독 AI</h4>
                  <span>온라인</span>
                </div>
              </div>
            </div>
            
            <div className="chat-messages">
              {messages.map(message => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="timestamp">
                      {message.timestamp.toLocaleTimeString('ko-KR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot">
                  <div className="message-content typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="quick-questions">
              <p>빠른 질문:</p>
              <div className="quick-buttons">
                {quickQuestions.map((question, index) => (
                  <button 
                    key={index}
                    className="quick-btn"
                    onClick={() => setInputValue(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="chat-input">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요..."
                rows="2"
              />
              <button onClick={handleSend} className="send-btn">
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 플로팅 챗봇 버튼 */}
      <div className={`floating-chatbot ${isOpen ? 'open' : ''}`}>
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        </button>
        
        {isOpen && (
          <div className="floating-chat">
            <div className="floating-chat-header">
              <h4>다독다독 AI 챗봇</h4>
            </div>
            <div className="floating-chat-body">
              <p>안녕하세요! 책에 대해 무엇이든 물어보세요! 😊</p>
              <div className="floating-quick-buttons">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button key={index} className="floating-quick-btn">
                    {question}
                  </button>
                ))}
              </div>
            </div>
            <div className="floating-chat-footer">
              <button className="start-chat-btn">
                채팅 시작하기
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chatbot;