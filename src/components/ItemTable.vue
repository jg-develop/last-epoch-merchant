<template>
    <table class="table table-sm table-hover table-striped">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">LP</th>
                <th scope="col">Weavers</th>
                <th scope="col">Slot</th>
                <th scope="col">Rarity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredItems" :key="item.name">
                <td scope="row">{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.lp }}</td>
                <td>{{ item.weavers }}</td>
                <td>{{ item.slot }}</td>
                <td>{{ item.rarity }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';
import { useItemStore } from '@/stores/itemStore';

const itemStore = useItemStore();
itemStore.fetchItems();

const filteredItems = computed(() => itemStore.filteredItems);
</script>

<style>
table {
    margin-top: 20px;
}

th,
td {
    text-align: left;
    border: none;
}

th {
    background-color: #f4f4f4;
}
</style>