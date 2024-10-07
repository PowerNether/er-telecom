<script setup>
import { TreeItem } from '@/ui';

defineEmits([ 'context-menu', 'itemClick' ])

const props = defineProps({
    children: {
        type: Array,
        default: new Array
    }
})
</script>

<template>
    <ul class="tree__list">
        <TreeItem
            v-for="child in children"
            :key="child.id"
            :content="child"
            @item-click="(id) => $emit('itemClick', id)"
            @context-menu="($event, content) => $emit('context-menu', $event, content)"
        />
    </ul>
</template>

<style>
    .tree__list {
        list-style: none;

        padding-left: 0;
        margin: 0;
    }
    .tree__item .tree__list {
        padding-left: 24px;
    }

    .tree__content {
        display: flex;
        align-items: center;
    }

    .tree__icon {
        display: block;

        width: 20px;
        height: 20px;

        padding: 2px;

        transform: rotate(-90deg);

        transition: transform .35s;

        cursor: pointer;
    }
    .tree__icon.opened {
        transform: rotate(-45deg);
    }

    .tree__description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;

        width: 100%;

        cursor: pointer;
    }

    .tree__name {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--text-color, #252B42);
    }
    .tree__attribute {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--second-text-color, #737373);
    }
</style>