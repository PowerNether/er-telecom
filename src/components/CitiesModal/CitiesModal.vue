<script setup>
import { computed } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    confirmText: {
        type: String,
        default: 'Сохранить'
    },
    data: {
        type: Object,
        default: new Object
    }
});

const emit = defineEmits([ 'update-model', 'confirm', 'close' ])

const inputModel = (type) => {
    return {
        get() {
            return props.data[type]
        },
        set(newValue) {
            emit('update-model', type, newValue);
        }
    }
}

const inputName = computed(inputModel('name'))
</script>

<template>
    <uModal
        :is-show="show"
        :confirm-text="confirmText"
        @confirm="$emit('confirm')"
        @close="$emit('close')"
    >
        <template #title>
            {{ title }}
        </template>
        <template #body>
            <div class="d-f fd-c g12">
                <uInput
                    v-model="inputName"
                    :name="'name'"
                    :placeholder="'Название'"
                />
            </div>
        </template>
    </uModal>
</template>