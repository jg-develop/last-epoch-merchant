<template>
  <div class="market">
    <h1>Market</h1>
    <filter-panel @filter-changed="updateFilters"></filter-panel>
    <price-graph :filters="filters"></price-graph>
  </div>
</template>

<script>
import FilterPanel from '@/components/FilterPanel.vue';
import PriceGraph from '@/components/PriceGraph.vue';

export default {
  name: 'MarketView',
  components: {
    FilterPanel,
    PriceGraph
  },
  data() {
    return {
      filters: {}
    };
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = newFilters;
    }
  }
};
</script>