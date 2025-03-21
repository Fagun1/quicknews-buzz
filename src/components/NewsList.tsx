
import React from "react";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/types/news";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <Carousel className="w-full h-[calc(100vh-120px)] overflow-hidden" orientation="vertical">
      <CarouselContent className="-mt-4 h-full">
        {newsItems.map((item) => (
          <CarouselItem key={item.id} className="pt-4 h-full">
            <div className="h-full p-1">
              <NewsCard 
                newsItem={item}
                isSaved={savedArticles.includes(item.id)}
                toggleSave={toggleSave}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default NewsList;
