<script>
import { defineComponent } from 'vue';
import { useItemStore } from '@/stores/itemStore';

export default defineComponent({
  name: 'FilterButton',
  props: {
    slotType: String,
    iconName: String
  },
  setup(props) {
    const itemStore = useItemStore();
    
    const toggleSlot = () => {
      itemStore.toggleSlotFilter(props.slotType);
    };

    return { toggleSlot };
  }
});
</script>

<template>
  <button @click="toggleSlot">
    <Icon :name="iconName" />
    {{ slotType }}
  </button>
</template>
