<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    actions: {
        type: Array,
        default: new Array
    },
    event: {
        type: Object,
        default: new Object
    }
});

defineEmits([ 'action-clicked' ])
</script>

<template>
    <uContext
        v-if="show"
        :actions="actions"
        :event="event"
        @action-clicked="(type) => $emit('action-clicked', type)"
    />
</template>
