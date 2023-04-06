import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
import NewsItems from "../NewsItems/NewsItems";

function MainPage() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6dfdf102ab31413da78b96947a8fdaea"
      );
      console.log(response.data.articles);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles &&
        articles.map((article) => {
          return (
            <NewsItems
              key={article.url}
              title={article.title}
              description={article.description}
              url={article.url}
              urlImage={article.urlToImage}
            />
          );
        })}
    </div>
  );
}

export default MainPage;
