import Vue from "vue";
import VueRouter from "vue-Router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode : "history",
    routes : [
        {path:"/", components: Home},
        {path:"/about", components: About}
    ]

});
