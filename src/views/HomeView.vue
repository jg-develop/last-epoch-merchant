<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ItemFilters />
      </div>
    </div>
    <div class="row">
      <div class="col-12 overflow-auto">
        <ItemTable />
      </div>
    </div>
  </div>
</template>

<script>
import ItemTable from '@/components/ItemTable.vue';
import ItemFilters from '@/components/ItemFilters.vue';

export default {
  name: 'HomeView',
  components: {
    ItemTable,
    ItemFilters
  }
};
</script>