<template>
    <div class="home">
      <h1>Welcome to the Game Item Price Tracker!</h1>
      <p>This website allows you to track and analyze the prices of items in your favorite game.</p>
      <h2>How to Use</h2>
      <ol>
        <li>Navigate to the Market page to view the latest price data.</li>
        <li>Use the filters to refine your search and find exactly what you're looking for.</li>
        <li>Click on an item to see detailed price history and trends.</li>
      </ol>
      <router-link to="/market">Go to Market</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  
  <style scoped>
  h1, h2 {
    color: #333;
  }
  
  p, li {
    color: #555;
  }
  
  ol {
    margin-left: 20px;
  }
  
  .router-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  </style>
  