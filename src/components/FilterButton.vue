<template>
  <button @click="toggleSlot">
    <img :src="iconPath" alt="Icon" width="20" height="20">
    {{ slotType }}
  </button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useItemStore } from '@/stores/itemStore';

export default defineComponent({
  name: 'FilterButton',
  props: {
    slotType: String
  },
  setup(props) {
    const itemStore = useItemStore();

    const toggleSlot = () => {
      itemStore.toggleSlotFilter(props.slotType);
    };

    const iconPath = computed(() => {
      const iconName = `unique_${props.slotType}.webp`;
      return require(`@/assets/icons/${iconName}`);
    });

    return { toggleSlot, iconPath };
  }
});
</script>
