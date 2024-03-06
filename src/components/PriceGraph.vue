<template>
    <div class="price-graph">
      <h2>Price Graph</h2>
      <!-- Placeholder for the graph. In practice, you'd use a chart library here. -->
      <div class="graph-placeholder">Graph will be rendered here.</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PriceGraph',
    props: {
      filters: Object,
    },
    watch: {
      filters: {
        immediate: true,
        handler(newVal, oldVal) {
          console.log(newVal + oldVal);
          this.renderGraph();
        },
      },
    },
    methods: {
      renderGraph() {
        // Here you would implement the logic to render or update the graph based on the current filters.
        console.log('Rendering graph with filters:', this.filters);
      },
    },
  };
  </script>
  
  <style scoped>
  .price-graph {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  
  .graph-placeholder {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    border: dashed 2px #ccc;
    border-radius: 8px;
  }
  </style>
  