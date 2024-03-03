const apikey = "3cf93b43992a4e0a961208ea68c5776a";
const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

/**
 * Fetches a list of random news articles from the News API.
 *
 * @returns {Promise<Object[]>} A list of news articles, or an empty array if an error occurs.
 */
async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=12&apiKey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}

/**
 * Fetches a list of news articles based on a search query.
 *
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} A list of news articles, or an empty array if an error occurs.
 */
async function fetchNewsQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=12&apiKey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news for the query", error);
    return [];
  }
}


/**
 * Fetches a list of news articles based on a search query.
 *
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} A list of news articles, or an empty array if an error occurs.
 */
searchButton.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query !== "") {
    try {
      const articles = await fetchNewsQuery(query);
      displayBlogs(articles);
    } catch (error) {
      console.log("Error fetching news for the query");
      console.error(error);
    }
  } else {
    // Empty query, do nothing
  }
});


/**
 * Fetches a list of news articles based on a search query.
 *
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} A list of news articles, or an empty array if an error occurs.
 */
async function displayBlogs(articles) {
  try {
    if (!blogContainer) {
      throw new Error("Blog container not found");
    }
    blogContainer.innerHTML = "";

    articles.forEach((article) => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");

      const img = document.createElement("img");
      img.src = article.urlToImage;
      img.alt = article.title;

      const title = document.createElement("h2");
      const truncatedTitle =
        article.title.length > 30 ? `${article.title.slice(0, 30)}...` : article.title;
      title.textContent = truncatedTitle;

      const description = document.createElement("p");
      const truncatedDescription =
        article.description.length > 120 ? `${article.description.slice(0, 120)}...` : article.description;
      description.textContent = truncatedDescription;

      blogCard.appendChild(img);
      blogCard.appendChild(title);
      blogCard.appendChild(description);

      blogCard.addEventListener("click", () => {
        window.open(article.url, "_blank");
      });

      blogContainer.appendChild(blogCard);
    });
  } catch (error) {
    console.error("Error displaying blogs", error);
  }
}


/**
 * Fetches a list of random news articles from the News API.
 *
 * @returns {Promise<Object[]>} A list of news articles, or an empty array if an error occurs.
 */
(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching and displaying blogs", error);
  }
})();
