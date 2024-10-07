<script setup>
const props = defineProps({
    actions: {
        type: Object,
        default: new Object
    },
    event: {
        type: Object,
        default: new Object
    }
});

defineEmits(['action-clicked']);
</script>

<template>
    <ul
        class="context"
        :style="{ top: event.y + 'px', left: event.x + 'px' }"
    >
        <template
            v-for="action in actions"
            :key="action.type"
        >
            <li
                v-if="action.visible"
                class="context__item"
                @click="$emit('action-clicked', action.type)"
            >
                {{ action.label }}
            </li>
        </template>
    </ul>
</template>

<style>
    .context {
        padding: 0;
        margin: 0;

        position: absolute;
        z-index: 1000;
        overflow: hidden;


        border-radius: 8px;
        border: 1px solid #E6E6E6;
        box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
    }

    .context__item {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.2px;
        color: var(--text-color, #252B42);

        padding: 10px;
        
        min-width: 120px;
        
        background-color: #FFFFFF;

        transition: background-color .35s;

        cursor: pointer;
    }
    .context__item:hover {
        background-color: #F6F6F6;
    }
</style>
