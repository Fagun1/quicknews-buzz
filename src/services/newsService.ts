
import { NewsItem } from "@/types/news";

const generateNewsId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export const fetchLatestNews = async (): Promise<NewsItem[]> => {
  // In a real application, you would make an actual API call to Gemini
  // For now, we'll simulate a response with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated response from Gemini
      const news: NewsItem[] = [
        {
          id: generateNewsId(),
          title: "SpaceX launches new satellite constellation for global internet coverage",
          summary: "SpaceX successfully deployed 60 more Starlink satellites, expanding its constellation aimed at providing global internet coverage. This marks the company's 15th Starlink mission this year.",
          image: "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "Technology",
          timeAgo: "1h ago"
        },
        {
          id: generateNewsId(),
          title: "Researchers discover new antibiotic effective against resistant bacteria",
          summary: "Scientists have identified a novel antibiotic compound that shows promising results against multi-drug resistant bacteria. Clinical trials are expected to begin next year.",
          image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "Health",
          timeAgo: "3h ago"
        },
        {
          id: generateNewsId(),
          title: "Global climate conference reaches milestone agreement on emissions",
          summary: "World leaders at the latest climate summit have agreed on binding targets to reduce carbon emissions by 45% by 2035. The agreement includes financial support for developing nations.",
          image: "https://images.unsplash.com/photo-1593288942460-e321b92a6cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "Environment",
          timeAgo: "5h ago"
        },
        {
          id: generateNewsId(),
          title: "Major tech companies announce joint initiative on AI ethics",
          summary: "Leading technology firms have formed a coalition to establish common ethical guidelines for AI development and deployment, focusing on transparency and accountability.",
          category: "Technology",
          timeAgo: "7h ago"
        },
        {
          id: generateNewsId(),
          title: "Stock markets rally as inflation concerns ease",
          summary: "Global markets saw significant gains today as new economic data suggests inflation pressures are easing. Central banks are expected to maintain current interest rates.",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "Finance",
          timeAgo: "9h ago"
        },
        {
          id: generateNewsId(),
          title: "New study reveals benefits of intermittent fasting",
          summary: "Research published today indicates that intermittent fasting may improve metabolic health and extend lifespan. Scientists emphasize the importance of consulting healthcare providers before starting any fasting regimen.",
          image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          category: "Health",
          timeAgo: "12h ago"
        }
      ];
      resolve(news);
    }, 1500); // Simulate network delay
  });
};
