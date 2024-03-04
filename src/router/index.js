import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/market",
    name: "Market",
    component: MarketView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
