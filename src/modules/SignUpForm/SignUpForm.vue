<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/app/stores/users.store';

const { createUser } = useUsersStore();
const router = useRouter();

const data = reactive({
    username: '',
    password: {
        current: '',
        repeat: ''
    }
});

function submitForm () {
    if (data.password.current === data.password.repeat) {
        const isRegister = createUser(data.username, data.password.current)

        if (isRegister) {
            router.push({ name: 'Login' });
        }
    }
}
</script>

<template>
    <form
        class="d-f fd-c g16 sign__form"
        @submit.prevent="submitForm"
    >
        <h3>Регистрация</h3>
        <uInput
            v-model="data.username"
            :name="'username'"
            :placeholder="'Логин'"
        />
        <uInput
            v-model="data.password.current"
            :name="'password'"
            :type="'password'"
            :placeholder="'Пароль'"
        />
        <uInput
            v-model="data.password.repeat"
            :name="'password-reset'"
            :type="'password'"
            :placeholder="'Пароль'"
        />
        <button
            class="button"
            type="submit"
        >
            Зарегестрироваться
        </button>
        <p class="text">
            Уже есть аккаунт?
            <RouterLink
                class="link"
                to="/login"
            >
                Войти
            </RouterLink>
        </p>
    </form>
</template>

<style>
@import url('@/app/styles/sign.css');
</style>
