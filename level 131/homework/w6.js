fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log("მიღებული მონაცემები:", data))
  .catch(error => console.error("შეცდომა:", error));