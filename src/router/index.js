import Vue from "vue";
import VueRouter from "vue-router";
import HomepageMV from "../components/homepage/HomepageMV";
// import { start } from "repl";
import { Start } from "../views/homepage/Start";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: HomepageMV
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;