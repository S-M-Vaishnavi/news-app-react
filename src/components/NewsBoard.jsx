import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({category,lang,q,searchBtn}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&q=${q}&apikey=e5f111937fdab4ef2b2371ee1fd5b67e`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };
    fetchArticles();
  }, [category,lang,q,searchBtn]);

  return (
    <div>
      <h1 className="text-center">Latest News</h1>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        ))
      ) : (
        <p>No news articles available</p>
      )}
    </div>
  );
};

export default NewsBoard;