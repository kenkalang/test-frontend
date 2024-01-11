import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue"
import Patient from "../views/Patient.vue"
import TTVRecord from "../views/TTVRecord.vue"
import CreateRecord from "../views/CreateRecord.vue"
import CreatePatient from "../views/CreatePatient.vue"
import Register from "../views/Register.vue"


const routes = [
    {
        path: "/",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },

    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/patient/create",
        name: "CreatePatient",
        component: CreatePatient,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/patient/:id",
        name: "Patient",
        component: Patient,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/patient/ttvRecord/:id",
        name: "TTVRecord",
        component: TTVRecord,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/patient/ttvRecord/:id/create",
        name: "CreateRecord",
        component: CreateRecord,
        meta: {
            requiresAuth: true
        }
    }

];


const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next("/login");
        return;
    }
    next();
});


export default router;