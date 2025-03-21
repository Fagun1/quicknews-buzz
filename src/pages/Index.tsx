
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share, Bookmark, Clock } from "lucide-react";
import NewsList from "@/components/NewsList";
import { sampleNewsData } from "@/data/sampleNews";

const Index = () => {
  const [savedArticles, setSavedArticles] = useState<string[]>([]);

  const toggleSave = (id: string) => {
    setSavedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(articleId => articleId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">QuickNews</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6 max-w-md">
        <NewsList 
          newsItems={sampleNewsData} 
          savedArticles={savedArticles}
          toggleSave={toggleSave}
        />
      </main>
    </div>
  );
};

export default Index;
