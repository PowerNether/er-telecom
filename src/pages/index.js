import { useUsersStore } from '@/app/stores/users.store';

export const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/pages/home/ui/HomePage.vue"),
        beforeEnter: (() => {
            const { user } = useUsersStore();
        
            if (!user.isAuth) { return { name: "Login" } }
        })
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/pages/login/ui/LoginPage.vue")
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("@/pages/register/ui/RegisterPage.vue")
    },
]
