import React from 'react';
import { FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';
import './CastMembers.css';

const CastMembers = () => {
  const members = [
    {
      id: 1,
      name: "김도서",
      role: "메인 호스트",
      specialty: "문학, 인문학",
      description: "10년 이상의 독서 경험을 바탕으로 다양한 장르의 책을 소개합니다. 특히 고전문학과 현대소설에 깊은 조예가 있습니다.",
      image: "https://via.placeholder.com/300x300/4F46E5/ffffff?text=김도서",
      social: {
        instagram: "@kimdoseo",
        twitter: "@kimdoseo_book",
        email: "kimdoseo@dadok.com"
      }
    },
    {
      id: 2,
      name: "이북토크",
      role: "공동 호스트",
      specialty: "자기계발, 경제",
      description: "실용서와 자기계발서 전문가로, 독자들에게 실질적인 도움이 되는 책들을 추천합니다.",
      image: "https://via.placeholder.com/300x300/7C3AED/ffffff?text=이북토크",
      social: {
        instagram: "@booktalk_lee",
        twitter: "@lee_booktalk",
        email: "leebt@dadok.com"
      }
    },
    {
      id: 3,
      name: "박리뷰",
      role: "게스트 리뷰어",
      specialty: "과학, 역사",
      description: "과학도서와 역사서를 쉽고 재미있게 해석해주는 전문 리뷰어입니다.",
      image: "https://via.placeholder.com/300x300/059669/ffffff?text=박리뷰",
      social: {
        instagram: "@park_review",
        twitter: "@parkreview_sci",
        email: "parkreview@dadok.com"
      }
    },
    {
      id: 4,
      name: "최책사랑",
      role: "특별 게스트",
      specialty: "에세이, 시집",
      description: "감성적인 글과 시를 사랑하며, 마음을 따뜻하게 해주는 책들을 소개합니다.",
      image: "https://via.placeholder.com/300x300/DC2626/ffffff?text=최책사랑",
      social: {
        instagram: "@choi_booklove",
        twitter: "@choibooklove",
        email: "choibl@dadok.com"
      }
    }
  ];

  return (
    <section className="cast-members section" id="cast">
      <div className="container">
        <div className="text-center mb-8">
          <h2>출연진 소개</h2>
          <p>다독다독과 함께하는 북토크 전문가들을 만나보세요</p>
        </div>
        
        <div className="members-grid">
          {members.map(member => (
            <div key={member.id} className="member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    <a href={`https://instagram.com/${member.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                      <FiInstagram size={20} />
                    </a>
                    <a href={`https://twitter.com/${member.social.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                      <FiTwitter size={20} />
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <FiMail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <div className="member-specialty">전문분야: {member.specialty}</div>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CastMembers;