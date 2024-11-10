"use client";

import React, { useState, useEffect } from "react";

const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
const url = "https://newsapi.org/v2/everything?q=";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNav, setSelectedNav] = useState("Technology");

  useEffect(() => {
    fetchNews(selectedNav);
  }, [selectedNav]);

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${url}${encodeURIComponent(query)}&apiKey=${API_KEY}`);
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
    }
  };

  const handleNavItemClick = (category) => {
    setSelectedNav(category);
    fetchNews(category);
  };

  const handleSearch = () => {
    if (!searchQuery) return;
    setSelectedNav(null);
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
              <li
                className={`hover-link nav-item ${selectedNav === "waste" ? "active" : ""}`}
                onClick={() => handleNavItemClick("waste")}
              >
                WASTE
              </li>
              <li
                className={`hover-link nav-item ${selectedNav === "ewaste" ? "active" : ""}`}
                onClick={() => handleNavItemClick("ewaste")}
              >
                EWASTE
              </li>
              <li
                className={`hover-link nav-item ${selectedNav === "recycle" ? "active" : ""}`}
                onClick={() => handleNavItemClick("recycle")}
              >
                RECYCLE
              </li>
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

export default App;
