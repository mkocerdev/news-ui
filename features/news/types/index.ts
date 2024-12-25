export interface NewsApiResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[] | [];
  nextPage: string | null;
}

export type NewsApiNextPage = NewsApiResponse["nextPage"];

export type NewsApiResults = NewsApiResponse["results"];

export interface NewsArticle {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string | null;
  content: string | null;
  pubDate: string;
  pubDateTZ: string;
  image_url: string | "";
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string | null;
  sentiment: string | null;
  sentiment_stats: string | null;
  ai_region: string | null;
  ai_org: string | null;
  duplicate: boolean;
}
