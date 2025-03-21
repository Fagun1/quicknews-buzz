import { useState, useEffect } from "react";
import NewsList from "@/components/NewsList";
import { fetchLatestNews } from "@/services/newsService";
import { NewsItem } from "@/types/news";
import { Loader2, Menu, AlertCircle, RefreshCw } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NewsSidebar from "@/components/NewsSidebar";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [savedArticles, setSavedArticles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching news for topic:", selectedTopic);
      const latestNews = await fetchLatestNews(selectedTopic);
      console.log("Received news items:", latestNews.length);
      setNewsItems(latestNews);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to load news articles";
      setError(errorMessage);
      toast({
        title: "Error loading news",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, [selectedTopic]);

  const toggleSave = (id: string) => {
    setSavedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
        : [...prev, id]
    );
    
    const action = savedArticles.includes(id) ? "removed from" : "added to";
    toast({
      title: `Article ${action} saved items`,
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="mr-3 p-1 rounded-md hover:bg-gray-100">
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <NewsSidebar onSelectTopic={setSelectedTopic} selectedTopic={selectedTopic} />
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-bold text-center flex-1">QuickNews</h1>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-md mx-auto">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <span className="ml-2 text-gray-600">Generating news with AI...</span>
            </div>
          ) : error ? (
            <div className="h-full flex items-center justify-center p-4">
              <div className="text-center space-y-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                <Button 
                  onClick={loadNews}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
              </div>
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
