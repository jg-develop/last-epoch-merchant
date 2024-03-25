import { defineStore } from 'pinia';
import sampleItems from '@/assets/data/sampleItems.json';

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [],
        filters: {
            price: null,
            lp: null,
            weavers: null,
            slot: []
        }
    }),
    getters: {
        filteredItems: (state) => {
            return state.items.filter(item => {
                return (state.filters.price === null || item.price <= state.filters.price) &&
                       (state.filters.lp === null || item.lp === state.filters.lp) &&
                       (state.filters.weavers === null || item.weavers <= state.filters.weavers) &&
                       (state.filters.slot.length === 0 || state.filters.slot.includes(item.slot));
            });
        }
    },
    actions: {
        setFilter(filterName, value) {
            this.filters[filterName] = value;
        },
        toggleSlotFilter(slot) {
            const index = this.filters.slot.indexOf(slot);
            if (index === -1) {
                this.filters.slot.push(slot);
            } else {
                this.filters.slot.splice(index, 1);
            }
        },
        async fetchItems() {

            this.items = sampleItems;

            // const itemsRef = firebaseRef(database, 'items');
            // const snapshot = await firebaseGet(itemsRef);
            // if (snapshot.exists()) {
            //     this.items = snapshot.val();
            // } else {
            //     console.log("No data available");
            //     this.items = [];
            // }
        }
    }
});
