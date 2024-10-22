
   async function searchFunction() {
       const query = document.querySelector('.search-box').value;
       const resultsContainer = document.querySelector('.results');
       resultsContainer.innerHTML = '<p>Searching...</p>';

       try {
           const response = await fetch(`https://customsearch.googleapis.com/v1/search?key=YOUR_API_KEY&q=${query}&cx=YOUR_SEARCH_ENGINE_ID`);
           const results = await response.json();

           resultsContainer.innerHTML = '<ul>' + results.items.map(item => `<li>${item.title}</li>`).join('') + '</ul>';
       } catch (error) {
           resultsContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
       }
   }
