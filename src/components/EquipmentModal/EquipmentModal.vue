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
const inputMac = computed(inputModel('mac'))
const inputIp = computed(inputModel('ip'))
const inputSerial = computed(inputModel('serial'))
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
                <uInput
                    v-model="inputMac"
                    :name="'mac'"
                    :placeholder="'MAC Адрес'"
                />
                <uInput
                    v-model="inputIp"
                    :name="'ip'"
                    :placeholder="'IP Адрес'"
                />
                <uInput
                    v-model="inputSerial"
                    :name="'serial'"
                    :placeholder="'Серийный номер'"
                />
            </div>
        </template>
    </uModal>
</template>