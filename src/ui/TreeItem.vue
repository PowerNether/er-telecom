<script setup>
import { computed, ref } from 'vue';

import { TreeView, IconTreeChevron } from '@/ui';

const props = defineProps({
    content: {
        type: Object,
        default: new Object
    }
})

const emit = defineEmits([ 'context-menu', 'itemClick' ]);

const isShowed = ref(false);
const isChildren = computed(() => { return props.content.children.length && props.content.type !== 'entrance' });
</script>

<template>
    <li class="tree__item">
        <div class="tree__content">
            <IconTreeChevron
                v-if="isChildren"
                class="tree__icon"
                :class="{ opened: isShowed }"
                @click="isShowed = !isShowed"
            />
            <div
                class="tree__description"
                @click="$emit('itemClick', content)"
                @contextmenu="$emit('context-menu', $event, content)"
            >
                <p class="tree__name">
                    {{ content.name }}
                </p>
                <span class="tree__attribute">
                    {{ content.type }}
                </span>
            </div>
        </div>
        <TreeView
            v-if="isChildren"
            v-show="isShowed"
            :children="content.children"
            @item-click="(id) => $emit('itemClick', id)"
            @context-menu="($event, content) => $emit('context-menu', $event, content)"
        />
    </li>
</template>