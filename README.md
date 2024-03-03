# News Blog Web App

This is a news blog web application that allows users to fetch and display news articles from the News API. Users can view a selection of random news articles or search for specific articles based on their query.

## Features

- Fetches and displays random news articles on initial load.
- Allows users to search for news articles based on their query.
- Displays the articles with a title, description, and image.
- Clicking on an article card opens the full article in a new tab.
- Handles errors gracefully and provides informative console logging.

## Technologies Used

- JavaScript
- HTML
- CSS
- News API

## Setup and Usage

1. Obtain an API key from the [News API](https://newsapi.org/).
2. Clone or download this repository to your local machine.
3. Open the `index.html` file in a web browser.
4. Input a search query in the search input field and click the search button to fetch and display news articles related to the query.
5. Alternatively, click the "Random" button to fetch and display random news articles.
6. Click on an article card to open the full article in a new tab.

## Configuration

In the `script.js` file, replace the `apikey` variable with your own API key obtained from the News API:

```javascript
const apikey = "YOUR_API_KEY";
```

## Limitations

- The web app is currently configured to fetch news articles from the US only. To fetch articles from a different country, modify the `country` parameter in the `fetchRandomNews()` and `fetchNewsQuery(query)` functions in `script.js`.
- The web app displays a maximum of 12 articles per page. To change the number of articles fetched, modify the `pageSize` parameter in the `fetchRandomNews()` and `fetchNewsQuery(query)` functions in `script.js`.

## Credits

This web app uses the [News API](https://newsapi.org/) to fetch news articles. Special thanks to the News API for providing the data source.

