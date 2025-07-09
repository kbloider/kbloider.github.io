import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '출연문의',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 구현에서는 서버로 데이터를 전송
    console.log('문의 내용:', formData);
    alert('문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '출연문의',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "이메일",
      value: "contact@dadok.com",
      description: "일반 문의 및 제휴 문의"
    },
    {
      icon: FiPhone,
      title: "전화",
      value: "02-1234-5678",
      description: "평일 09:00 - 18:00"
    },
    {
      icon: FiMapPin,
      title: "주소",
      value: "서울특별시 강남구 테헤란로 123",
      description: "다독다독 오피스"
    }
  ];

  const inquiryTypes = [
    {
      type: "출연문의",
      email: "casting@dadok.com",
      description: "북토크 프로그램 출연 관련 문의"
    },
    {
      type: "협찬문의",
      email: "sponsor@dadok.com",
      description: "도서 협찬 및 제품 협찬 문의"
    },
    {
      type: "광고문의",
      email: "ad@dadok.com",
      description: "브랜드 광고 및 마케팅 협업 문의"
    },
    {
      type: "기타문의",
      email: "contact@dadok.com",
      description: "기타 모든 문의사항"
    }
  ];

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="text-center mb-8">
          <h2>문의하기</h2>
          <p>다독다독과 함께하고 싶으시다면 언제든 연락주세요</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처 정보</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p className="contact-value">{info.value}</p>
                    <p className="contact-desc">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="inquiry-types">
              <h4>문의 유형별 담당자</h4>
              <div className="inquiry-grid">
                {inquiryTypes.map((inquiry, index) => (
                  <div key={index} className="inquiry-card">
                    <h5>{inquiry.type}</h5>
                    <p className="inquiry-email">{inquiry.email}</p>
                    <p className="inquiry-desc">{inquiry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>온라인 문의</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FiUser size={16} />
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="성함을 입력해주세요"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FiMail size={16} />
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="이메일 주소를 입력해주세요"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  <FiPhone size={16} />
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="전화번호를 입력해주세요"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiryType">
                  <FiMessageSquare size={16} />
                  문의 유형 *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="출연문의">출연문의</option>
                  <option value="협찬문의">협찬문의</option>
                  <option value="광고문의">광고문의</option>
                  <option value="기타문의">기타문의</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare size={16} />
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="구체적인 문의 내용을 입력해주세요"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                <FiSend size={16} />
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;