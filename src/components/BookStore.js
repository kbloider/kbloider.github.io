import React from 'react';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import './BookStore.css';

const BookStore = () => {
  const books = [
    {
      id: 1,
      title: "인생을 바꾸는 독서의 힘",
      author: "김독서",
      price: 16800,
      originalPrice: 18000,
      rating: 4.8,
      reviews: 127,
      image: "https://via.placeholder.com/200x280/4F46E5/ffffff?text=Book+1",
      category: "자기계발",
      description: "독서를 통해 인생을 변화시키는 실질적인 방법들을 담은 책",
      featured: true
    },
    {
      id: 2,
      title: "소설 속 숨겨진 세계",
      author: "이문학",
      price: 14400,
      originalPrice: 16000,
      rating: 4.6,
      reviews: 89,
      image: "https://via.placeholder.com/200x280/7C3AED/ffffff?text=Book+2",
      category: "문학",
      description: "소설을 깊이 있게 읽는 방법과 작품 해석의 기술",
      featured: false
    },
    {
      id: 3,
      title: "경제를 읽는 새로운 시각",
      author: "박경제",
      price: 19800,
      originalPrice: 22000,
      rating: 4.9,
      reviews: 203,
      image: "https://via.placeholder.com/200x280/059669/ffffff?text=Book+3",
      category: "경제",
      description: "복잡한 경제 이론을 쉽게 이해할 수 있는 입문서",
      featured: true
    },
    {
      id: 4,
      title: "과학의 즐거움",
      author: "최과학",
      price: 17100,
      originalPrice: 19000,
      rating: 4.7,
      reviews: 156,
      image: "https://via.placeholder.com/200x280/DC2626/ffffff?text=Book+4",
      category: "과학",
      description: "어려운 과학을 재미있게 배울 수 있는 대중과학서",
      featured: false
    },
    {
      id: 5,
      title: "마음을 담은 에세이",
      author: "정감성",
      price: 13500,
      originalPrice: 15000,
      rating: 4.5,
      reviews: 94,
      image: "https://via.placeholder.com/200x280/8B5CF6/ffffff?text=Book+5",
      category: "에세이",
      description: "일상의 소중함을 되새기게 하는 따뜻한 에세이",
      featured: false
    },
    {
      id: 6,
      title: "역사 속 인물들의 이야기",
      author: "한역사",
      price: 20700,
      originalPrice: 23000,
      rating: 4.8,
      reviews: 178,
      image: "https://via.placeholder.com/200x280/F59E0B/ffffff?text=Book+6",
      category: "역사",
      description: "역사 속 인물들의 삶을 통해 배우는 지혜",
      featured: true
    }
  ];

  const formatPrice = (price) => {
    return price.toLocaleString('ko-KR');
  };

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="book-store section" id="books">
      <div className="container">
        <div className="text-center mb-8">
          <h2>추천 도서</h2>
          <p>다독다독에서 추천하는 엄선된 도서들을 만나보세요</p>
        </div>
        
        <div className="book-filters">
          <button className="filter-btn active">전체</button>
          <button className="filter-btn">자기계발</button>
          <button className="filter-btn">문학</button>
          <button className="filter-btn">경제</button>
          <button className="filter-btn">과학</button>
          <button className="filter-btn">에세이</button>
          <button className="filter-btn">역사</button>
        </div>
        
        <div className="books-grid">
          {books.map(book => (
            <div key={book.id} className={`book-card ${book.featured ? 'featured' : ''}`}>
              {book.featured && <div className="featured-badge">추천</div>}
              
              <div className="book-image">
                <img src={book.image} alt={book.title} />
                <div className="book-overlay">
                  <button className="wishlist-btn">
                    <FiHeart size={20} />
                  </button>
                  <button className="quick-view-btn">
                    미리보기
                  </button>
                </div>
              </div>
              
              <div className="book-info">
                <div className="book-category">{book.category}</div>
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-description">{book.description}</p>
                
                <div className="book-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(book.rating) ? "#F59E0B" : "none"}
                        color="#F59E0B"
                      />
                    ))}
                    <span>{book.rating}</span>
                  </div>
                  <span className="review-count">({book.reviews}개 리뷰)</span>
                </div>
                
                <div className="book-price">
                  <span className="current-price">₩{formatPrice(book.price)}</span>
                  {book.originalPrice > book.price && (
                    <>
                      <span className="original-price">₩{formatPrice(book.originalPrice)}</span>
                      <span className="discount">{calculateDiscount(book.originalPrice, book.price)}% 할인</span>
                    </>
                  )}
                </div>
                
                <button className="add-to-cart-btn">
                  <FiShoppingCart size={16} />
                  장바구니 담기
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#contact" className="btn">
            더 많은 도서 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookStore;