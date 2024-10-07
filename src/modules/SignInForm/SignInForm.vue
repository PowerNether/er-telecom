<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/app/stores/users.store';

const { authUser } = useUsersStore();
const router = useRouter();

const data = reactive({
    username: '',
    password: ''
});

function submitForm () {
    const isAuth = authUser(data.username, data.password);

    if (isAuth) {
        router.push({ name: 'Home' });
    }
}
</script>

<template>
    <form
        class="d-f fd-c g16 sign__form"
        @submit.prevent="submitForm"
    >
        <h3>Авторизация</h3>
        <uInput
            v-model="data.username"
            :name="'username'"
            :placeholder="'Логин'"
        />
        <uInput
            v-model="data.password"
            :name="'password'"
            :type="'password'"
            :placeholder="'Пароль'"
        />
        <button
            class="button"
            type="submit"
        >
            Войти
        </button>
        <p class="text">
            Еще не зарегистрированы?
            <RouterLink
                class="link"
                to="/register"
            >
                Регистрация
            </RouterLink>
        </p>
    </form>
</template>

<style>
@import url('@/app/styles/sign.css');
</style>
