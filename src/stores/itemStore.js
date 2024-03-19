import { defineStore } from 'pinia';
import sampleItems from '@/assets/sampleItems.json';

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [],
        filters: {
            price: null,
            lp: null,
            weavers: null,
            slot: null
        }
    }),
    getters: {
        filteredItems: (state) => {
            return state.items.filter(item => {
                return (state.filters.price === null || item.price <= state.filters.price) &&
                       (state.filters.lp === null || item.lp === state.filters.lp) &&
                       (state.filters.weavers === null || item.weavers <= state.filters.weavers) &&
                       (state.filters.slot === null || item.slot === state.filters.slot);
            });
        }
    },
    actions: {
        setFilter(filterName, value) {
            this.filters[filterName] = value;
        },
        fetchItems() {
            //console.log(sampleItems);
            this.items = sampleItems;
        }
    }
});
