<template>
    <div class="filter-panel">
      <h2>Filters</h2>
      <div>
        <label for="item-type">Item Type:</label>
        <select id="item-type" v-model="filters.type">
          <option value="">All</option>
          <option value="weapon">Weapon</option>
          <option value="armor">Armor</option>
          <option value="consumable">Consumable</option>
        </select>
      </div>
      <div>
        <label for="price-range">Price Range:</label>
        <select id="price-range" v-model="filters.priceRange">
          <option value="">All</option>
          <option value="0-100">0 - 100</option>
          <option value="101-500">101 - 500</option>
          <option value="501-1000">501 - 1000</option>
        </select>
      </div>
      <button @click="applyFilters">Apply Filters</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterPanel',
    data() {
      return {
        filters: {
          type: '',
          priceRange: '',
        },
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter-changed', this.filters);
      },
    },
  };
  </script>
  
  <style scoped>
  .filter-panel {
    margin-bottom: 20px;
  }
  
  label {
    margin-right: 10px;
  }
  
  select, button {
    margin-top: 10px;
    margin-right: 10px;
  }
  </style>
  