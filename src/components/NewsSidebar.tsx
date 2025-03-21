
import React from "react";
import { Newspaper, Home, Star, User, Search, Globe, Monitor, Heart, ShoppingBag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsSidebarProps {
  onSelectTopic: (topic: string) => void;
  selectedTopic: string;
}

interface TopicItem {
  id: string;
  name: string;
  icon: React.ElementType;
}

const topics: TopicItem[] = [
  { id: "all", name: "All News", icon: Home },
  { id: "trending", name: "Trending", icon: Zap },
  { id: "world", name: "World", icon: Globe },
  { id: "technology", name: "Technology", icon: Monitor },
  { id: "entertainment", name: "Entertainment", icon: Star },
  { id: "health", name: "Health", icon: Heart },
  { id: "sports", name: "Sports", icon: Newspaper },
  { id: "business", name: "Business", icon: ShoppingBag },
];

const NewsSidebar: React.FC<NewsSidebarProps> = ({ onSelectTopic, selectedTopic }) => {
  return (
    <div className="flex flex-col h-full py-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4 px-4">News Categories</h2>
        <div className="space-y-1">
          {topics.map((topic) => (
            <Button
              key={topic.id}
              variant={selectedTopic === topic.id ? "secondary" : "ghost"}
              className="w-full justify-start px-4"
              onClick={() => onSelectTopic(topic.id)}
            >
              <topic.icon className="mr-2 h-4 w-4" />
              {topic.name}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="mt-auto px-4">
        <div className="border-t pt-4">
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-2 h-4 w-4" />
            Saved Articles
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSidebar;
