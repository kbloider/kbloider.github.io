import React from 'react';
import { FiYoutube, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>다독다독</h3>
              <p>책과 함께하는 즐거운 이야기</p>
            </div>
            <p className="footer-description">
              다독다독은 독서를 사랑하는 모든 분들과 함께 
              책의 즐거움을 나누는 북토크 채널입니다.
              다양한 장르의 책을 통해 새로운 관점과 
              지식을 공유합니다.
            </p>
            <div className="social-links">
              <a 
                href="https://www.youtube.com/@dadokbooktalk" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="유튜브 채널"
              >
                <FiYoutube size={20} />
              </a>
              <a 
                href="https://instagram.com/dadokbooktalk" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="인스타그램"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com/dadokbooktalk" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="트위터"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="mailto:contact@dadok.com"
                aria-label="이메일"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>바로가기</h4>
            <ul className="footer-links">
              <li><a href="#home">홈</a></li>
              <li><a href="#videos">추천영상</a></li>
              <li><a href="#cast">출연진</a></li>
              <li><a href="#books">도서판매</a></li>
              <li><a href="#chatbot">AI 챗봇</a></li>
              <li><a href="#contact">문의하기</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>문의처</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail size={16} />
                <span>contact@dadok.com</span>
              </div>
              <div className="contact-item">
                <FiPhone size={16} />
                <span>02-1234-5678</span>
              </div>
              <div className="contact-item">
                <FiMapPin size={16} />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
            </div>
            
            <div className="business-hours">
              <h5>운영시간</h5>
              <p>평일: 09:00 - 18:00</p>
              <p>주말/공휴일: 휴무</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>서비스</h4>
            <ul className="footer-links">
              <li><a href="#contact">출연 문의</a></li>
              <li><a href="#contact">협찬 문의</a></li>
              <li><a href="#contact">광고 문의</a></li>
              <li><a href="#books">도서 추천</a></li>
              <li><a href="#chatbot">AI 상담</a></li>
            </ul>
            
            <div className="newsletter">
              <h5>뉴스레터 구독</h5>
              <p>새로운 영상과 도서 정보를 받아보세요</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="이메일 주소"
                  aria-label="뉴스레터 구독 이메일"
                />
                <button type="submit">구독</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 다독다독. All rights reserved.</p>
            </div>
            <div className="footer-policies">
              <a href="/privacy">개인정보처리방침</a>
              <a href="/terms">이용약관</a>
              <a href="/cookies">쿠키정책</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;