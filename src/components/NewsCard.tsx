
import React from "react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share, Bookmark, Clock } from "lucide-react";
import { NewsItem } from "@/types/news";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "@/components/ui/use-toast";

interface NewsCardProps {
  newsItem: NewsItem;
  isSaved: boolean;
  toggleSave: (id: string) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  newsItem, 
  isSaved, 
  toggleSave 
}) => {
  const { id, title, summary, image, category, timeAgo } = newsItem;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: summary,
        url: window.location.href,
      }).catch(() => {
        toast({
          title: "Sharing not supported",
          description: "Sharing is not supported in this browser",
          variant: "destructive",
        });
      });
    } else {
      toast({
        title: "Sharing not supported",
        description: "Sharing is not supported in this browser",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-md h-full">
      {image && (
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      )}
      
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock size={14} />
            {timeAgo}
          </span>
        </div>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-gray-700 line-clamp-3">{summary}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-600"
          onClick={handleShare}
        >
          <Share size={18} className="mr-1" />
          Share
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm"
          className={isSaved ? "text-primary" : "text-gray-600"}
          onClick={() => toggleSave(id)}
        >
          <Bookmark size={18} className="mr-1" fill={isSaved ? "currentColor" : "none"} />
          {isSaved ? "Saved" : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
