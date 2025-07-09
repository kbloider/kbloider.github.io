import React from 'react';
import { FiYoutube, FiBookOpen, FiUsers } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>다독다독</h1>
        <p>책과 함께하는 즐거운 이야기, 지식과 감동을 나누는 북토크</p>
        <div className="hero-buttons">
          <a 
            href="https://www.youtube.com/@dadokbooktalk" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube style={{ marginRight: '8px' }} />
            유튜브 채널 보기
          </a>
          <a href="#videos" className="btn btn-secondary">
            <FiBookOpen style={{ marginRight: '8px' }} />
            추천도서 보기
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <FiUsers size={32} />
            <h3>1만+</h3>
            <p>구독자</p>
          </div>
          <div className="stat-item">
            <FiBookOpen size={32} />
            <h3>100+</h3>
            <p>리뷰도서</p>
          </div>
          <div className="stat-item">
            <FiYoutube size={32} />
            <h3>200+</h3>
            <p>영상콘텐츠</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;