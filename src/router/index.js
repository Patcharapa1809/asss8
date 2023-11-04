import { createRouter, createWebHistory } from "vue-router";
import Home from"../pages/Home.vue"
const router = [{
    path: "/",
    component: Home,
    name: "Home",
}]
const router = createWebHistory({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavion(to, from, scrollBehavion) {
        if (to.hash) {
            return {
                selector: to.hash,
                Behavior: 'smoot'
            };
        }
        return { x: 0, y: 0 }; // Go to the top of the page if no hash
    },
    router,
});
export default router;