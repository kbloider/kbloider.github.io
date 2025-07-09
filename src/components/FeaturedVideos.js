import React from 'react';
import { FiPlay, FiClock, FiEye } from 'react-icons/fi';
import './FeaturedVideos.css';

const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "인생을 바꾸는 독서의 힘",
      description: "독서가 우리 삶에 미치는 놀라운 영향력에 대해 이야기합니다.",
      thumbnail: "https://via.placeholder.com/400x225/4F46E5/ffffff?text=Video+1",
      duration: "15:32",
      views: "12.5K",
      category: "자기계발"
    },
    {
      id: 2,
      title: "소설 속 숨겨진 메시지 찾기",
      description: "유명 소설들 속에 담긴 깊은 의미와 작가의 의도를 파헤쳐봅니다.",
      thumbnail: "https://via.placeholder.com/400x225/7C3AED/ffffff?text=Video+2",
      duration: "22:18",
      views: "8.9K",
      category: "문학"
    },
    {
      id: 3,
      title: "경제도서로 배우는 투자철학",
      description: "경제 전문서를 통해 올바른 투자 마인드셋을 배워봅시다.",
      thumbnail: "https://via.placeholder.com/400x225/059669/ffffff?text=Video+3",
      duration: "18:45",
      views: "15.2K",
      category: "경제"
    },
    {
      id: 4,
      title: "과학도서로 떠나는 우주여행",
      description: "흥미진진한 과학도서들과 함께 우주의 신비를 탐험해보세요.",
      thumbnail: "https://via.placeholder.com/400x225/DC2626/ffffff?text=Video+4",
      duration: "20:11",
      views: "6.7K",
      category: "과학"
    }
  ];

  return (
    <section className="featured-videos section" id="videos">
      <div className="container">
        <div className="text-center mb-8">
          <h2>추천 영상</h2>
          <p>다독다독에서 엄선한 북토크 영상들을 만나보세요</p>
        </div>
        
        <div className="video-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <button className="play-button">
                    <FiPlay size={24} />
                  </button>
                </div>
                <div className="video-info-overlay">
                  <span className="duration">
                    <FiClock size={14} />
                    {video.duration}
                  </span>
                  <span className="views">
                    <FiEye size={14} />
                    {video.views}
                  </span>
                </div>
              </div>
              
              <div className="video-content">
                <div className="video-category">{video.category}</div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <button className="watch-btn">
                  영상 보기
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.youtube.com/@dadokbooktalk" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            더 많은 영상 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;