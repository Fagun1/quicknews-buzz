
import { useState, useEffect } from "react";
import NewsList from "@/components/NewsList";
import { fetchLatestNews } from "@/services/newsService";
import { NewsItem } from "@/types/news";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [savedArticles, setSavedArticles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const latestNews = await fetchLatestNews();
        setNewsItems(latestNews);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const toggleSave = (id: string) => {
    setSavedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">QuickNews</h1>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-md mx-auto">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <span className="ml-2 text-gray-600">Loading latest news...</span>
            </div>
          ) : (
            <NewsList 
              newsItems={newsItems} 
              savedArticles={savedArticles}
              toggleSave={toggleSave}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
