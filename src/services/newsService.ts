
import { NewsItem } from "@/types/news";
import { sampleNewsData } from "@/data/sampleNews";

// Simulating a fetch from API with a delay
export const fetchLatestNews = async (topic: string = "all"): Promise<NewsItem[]> => {
  // Simulate network request delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, you would make a fetch request to an API
  // e.g., `fetch(`https://api.example.com/news?topic=${topic}`)`
  
  // For demo purposes, we're filtering the sample data based on topic
  if (topic === "all") {
    return sampleNewsData;
  }
  
  // Map our internal topics to categories in the sample data
  // This is just for demo - in a real app, you'd pass the topic to the API
  const topicMapping: Record<string, string> = {
    "trending": "trending",
    "world": "world",
    "technology": "technology",
    "entertainment": "entertainment",
    "health": "health",
    "sports": "sports",
    "business": "business",
  };
  
  const categoryToFilter = topicMapping[topic] || topic;
  
  // Filter sample news by category
  // For demo, we'll just return a subset of the news items to simulate different topics
  return sampleNewsData.filter((item, index) => {
    // This is just a simple way to simulate different news for different topics
    // In a real app, each item would have a proper category field
    if (topic === "trending") {
      return index % 5 === 0; // Every 5th item
    }
    if (topic === "technology") {
      return index % 3 === 0; // Every 3rd item
    }
    if (topic === "sports") {
      return index % 4 === 0; // Every 4th item
    }
    
    // For other topics, just return a random subset
    return index % Math.max(2, topic.length) === 0;
  });
};
