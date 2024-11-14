"use client";

import React, { useState, useEffect } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNav, setSelectedNav] = useState("waste"); // Default category

  useEffect(() => {
    fetchNews(selectedNav);
  }, [selectedNav]);

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`/api/news?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      console.log("API Response:", data); // Log the API response to inspect it
      if (data && data.articles) {
        setArticles(data.articles);
      } else {
        console.error("Invalid API response structure:", data);
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]); // Clear articles on error
    }
  };

  const handleNavItemClick = (category) => {
    setSelectedNav(category);
  };

  const handleSearch = () => {
    if (!searchQuery) return;
    setSelectedNav(searchQuery); // Set search query as the selected category
    fetchNews(searchQuery);
  };

  return (
    <div className="App">
      <nav>
        <div className="main-nav container flex">
          <a href="/" className="company-logo">
            {/* Add your logo image here */}
          </a>
          <div className="nav-links">
            <ul className="flex">
              {["waste", "ewaste", "recycle"].map(category => (
                <li
                  key={category}
                  className={`hover-link nav-item ${selectedNav === category ? "active" : ""}`}
                  onClick={() => handleNavItemClick(category)}
                >
                  {category.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
          <div className="search-bar flex">
            <input
              type="text"
              className="news-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Trash"
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container container flex">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              article.urlToImage && (
                <div className="card" key={index} onClick={() => window.open(article.url, "_blank")}>
                  <div className="card-header">
                    <img src={article.urlToImage} alt="News" />
                  </div>
                  <div className="card-content">
                    <h3>{article.title.slice(0, 60)}...</h3>
                    <h6 className="news-source">
                      {article.source.name} · {new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}
                    </h6>
                    <p>{article.description ? `${article.description.slice(0, 150)}...` : "No description available"}</p>
                  </div>
                </div>
              )
            ))
          ) : (
            <p>No articles found. Please try a different search term.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default News;