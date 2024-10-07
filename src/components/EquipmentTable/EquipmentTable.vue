<script setup>
const props = defineProps({
    labels: {
        type: Array,
        default: new Array
    },
    data: {
        type: Array,
        default: new Array
    },
    isLast: {
        type: Boolean,
        default: false
    }
});

defineEmits([ 'contextMenu', 'create' ]);
</script>

<template>
    <div class="d-f fd-c g16">
        <uTable
            v-if="data.length"
            :labels="props.labels"
            :data="props.data"
            @context-menu="($event, column) => $emit('contextMenu', $event, column)"
        />
        <button
            v-if="isLast"
            class="button"
            @click="$emit('create')"
        >
            Добавить оборудование
        </button>
    </div>
</template>