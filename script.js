function generateQuote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = "Loading...";

  fetch("https://thequoteshub.com/api/tags/time")
    .then((response) => response.json())
    .then((data) => {
      const quotes = data.quotes;
      if (quotes && quotes.length > 0) {
        const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = `"${text}" — ${author}`;
      } else {
        quoteElement.textContent = "No quotes available.";
      }
    })
    .catch((error) => {
      quoteElement.textContent = "Failed to fetch quote. Please try again.";
      console.error("Error fetching quote:", error);
    });
}
