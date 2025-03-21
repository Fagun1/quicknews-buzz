import React, { useEffect, useState, useRef } from "react";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/types/news";

interface NewsListProps {
  newsItems: NewsItem[];
  savedArticles: string[];
  toggleSave: (id: string) => void;
}

const NewsList: React.FC<NewsListProps> = ({ 
  newsItems, 
  savedArticles, 
  toggleSave 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const newsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < newsItems.length) {
      newsRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe up - next article
        scrollToIndex(currentIndex + 1);
      } else {
        // Swipe down - previous article
        scrollToIndex(currentIndex - 1);
      }
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      // Scrolling down
      scrollToIndex(currentIndex + 1);
    } else {
      // Scrolling up
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          scrollToIndex(currentIndex - 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          scrollToIndex(currentIndex + 1);
          break;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
    }

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex, newsItems.length]);

  if (newsItems.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500">No news articles available</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-[calc(100vh-120px)] overflow-hidden scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <div className="space-y-4 p-4">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            ref={el => newsRefs.current[index] = el}
            className={`transition-all duration-300 ${
              currentIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
            }`}
          >
            <NewsCard 
              newsItem={item}
              isSaved={savedArticles.includes(item.id)}
              toggleSave={toggleSave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
