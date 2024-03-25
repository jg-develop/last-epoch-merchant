<template>
  <div>
    <FilterButton
      v-for="slot in slotTypes"
      :key="slot"
      :slotType="slot"
    />
  </div>
</template>

<script>
import FilterButton from '@/components/FilterButton.vue';

export default {
  name: 'ItemFilters',
  components: {
    FilterButton
  },
  data() {
    return {
      slotTypes: ['amulet', 'axe', 'belt', 'boots', 'bow', 'chest', 'gloves', 'helmet', 'relic', 'ring', 'shield', 'staff', 'sword', 'wand']
    };
  }
};
</script>