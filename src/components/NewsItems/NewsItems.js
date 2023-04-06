import React from "react";
import './newsItems.css'
function NewsItems({ title, description, url, urlImage }) {
  return (
    <div className="news-items">
      <div className="news-item">
        <img className="news-img" src={urlImage} alt="imge" />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItems;
