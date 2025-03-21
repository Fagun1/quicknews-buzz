
import React from "react";
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
  return (
    <div className="space-y-4">
      {newsItems.map((item) => (
        <NewsCard 
          key={item.id}
          newsItem={item}
          isSaved={savedArticles.includes(item.id)}
          toggleSave={toggleSave}
        />
      ))}
    </div>
  );
};

export default NewsList;
