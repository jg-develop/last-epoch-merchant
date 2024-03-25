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

<template>
  <div>
    <FilterButton
      v-for="slot in slotTypes"
      :key="slot"
      :slotType="slot"
      iconName="icon-name-for-slot"
    />
  </div>
</template>
