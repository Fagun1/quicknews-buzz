import { NewsItem } from "@/types/news";

// Sample news data for testing
const sampleNewsData: NewsItem[] = [
  {
    id: "1",
    title: "SpaceX Successfully Launches New Satellite Constellation",
    summary: "SpaceX has successfully launched its latest batch of Starlink satellites, expanding its global internet coverage network. The launch marks another milestone in the company's ambitious plan to provide worldwide internet access.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    category: "technology",
    timeAgo: "2 hours ago",
    url: "https://example.com/spacex-launch"
  },
  {
    id: "2",
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "World leaders have reached a groundbreaking agreement on climate action, setting ambitious targets for carbon reduction and establishing a $100 billion fund for developing nations.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=60",
    category: "world",
    timeAgo: "4 hours ago",
    url: "https://example.com/climate-summit"
  },
  {
    id: "3",
    title: "New Medical Breakthrough in Cancer Treatment",
    summary: "Scientists have discovered a promising new approach to cancer treatment using targeted immunotherapy, showing remarkable results in early clinical trials.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    category: "health",
    timeAgo: "6 hours ago",
    url: "https://example.com/cancer-breakthrough"
  },
  {
    id: "4",
    title: "Champions League Quarter-Finals Draw Announced",
    summary: "The UEFA Champions League quarter-finals draw has been completed, setting up several exciting matches between Europe's top football clubs.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=60",
    category: "sports",
    timeAgo: "8 hours ago",
    url: "https://example.com/champions-league"
  },
  {
    id: "5",
    title: "Major Tech Company Announces Revolutionary AI Product",
    summary: "A leading technology company has unveiled its latest artificial intelligence product, promising to transform how we interact with digital devices.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    category: "technology",
    timeAgo: "10 hours ago",
    url: "https://example.com/ai-product"
  }
];

export const fetchLatestNews = async (topic: string = "all"): Promise<NewsItem[]> => {
  try {
    console.log("Fetching news for topic:", topic);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (topic === "all") {
      return sampleNewsData;
    }
    
    // Filter by topic
    return sampleNewsData.filter(item => 
      item.category.toLowerCase() === topic.toLowerCase()
    );
  } catch (error) {
    console.error("Failed to fetch news:", error);
    throw error;
  }
};
