
import { useState } from "react";
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
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">QuickNews</h1>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-md mx-auto">
          <NewsList 
            newsItems={sampleNewsData} 
            savedArticles={savedArticles}
            toggleSave={toggleSave}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
