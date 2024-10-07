import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const users = reactive([ { username: 'admin', password: 'admin' }, { username: '1', password: '1' } ]);

    const user = reactive({ username: '', isAuth: false })

    function createUser (username, password) {
        if (username, password) {
            users.push({ username, password });
            return true;
        }

        
        return false;
    }

    function authUser (username, password) {

        for (let index in users) {
            const element = users[index];

            if (element.username === username && element.password === password) {
                user.username = username;
                user.isAuth = true;

                return true;
            }
        }

        return false;
    }

    return {
        user,
        createUser,
        authUser
    }
});