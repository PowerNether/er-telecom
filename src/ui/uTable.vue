<script setup>
const props = defineProps({
    labels: {
        type: Array,
        default: new Array
    },
    data: {
        type: Array,
        default: new Array
    }
});

defineEmits([ 'context-menu' ])
</script>

<template>
    <table>
        <thead>
            <tr>
                <th
                    v-for="(label, labelKey) in labels"
                    :key="labelKey"
                    :style="{ width: label.width + label.unit }"
                >
                    {{ label.name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(column, columnKey) in data"
                :key="columnKey"
                @contextmenu="$emit('context-menu', $event, column)"
            >
                <td
                    v-for="(content, contentKey) in column"
                    :key="contentKey"
                >
                    {{ content }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
table {
    width: 100%;
}
table th,
table td {
    font-size: 14px;
    line-height: 18px;
    color: var(--text-color, #252B42);
    
    padding: 12px;
    border: 1px solid #EDEDED;
}
table th {
    font-weight: 800;
    letter-spacing: 0.1px;
    text-align: left;
}
table td {
    font-weight: 500;
    letter-spacing: 0.2px;
}
table tr:nth-of-type(even) {
    background: #F6F6F6;
}
</style>