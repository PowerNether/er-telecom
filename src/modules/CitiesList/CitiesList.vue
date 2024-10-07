<script setup>
import { ref, onMounted } from 'vue';
import { useCitiesStore } from '@/app/stores/cities.store';

import { CitiesModal, CitiesContext } from '@/components';
import { TreeView } from '@/ui';

// Store
const citiesStore = useCitiesStore();

// Reactive Variables
const modalShow = ref(false);
const modalTitle = ref('');
const modalConfirmText = ref('Сохранить');
const modalData = ref({ name: '', id: 0, type: '' });
const modalType = ref('');
const contextShow = ref(false);
const contextEvent = ref({ x: 0, y: 0 });
const contextActions = [
    { label: 'Добавить', type: 'create', visible: true },
    { label: 'Изменить', type: 'edit', visible: true },
    { label: 'Удалить', type: 'remove', visible: true }
];

// Tree Functions
function handleTreeContext ($event, data) {
    $event.preventDefault();

    contextEvent.value = { x: $event.x, y: $event.y };
    contextShow.value = true;

    for (let index in contextActions) {
        const action = contextActions[index];

        if (action.type === 'create') {
            action.visible = data.type !== 'entrance';
            break;
        }
    }

    modalData.value = { name: data.name, id: data.id, type: data.type };
}
function handleClickOnTreeElement (content) {
    citiesStore.currentElement = content;
}

// Modal Functions
function setModalDataModel (type, value) {
    modalData.value[type] = value;
}
function confirmModal () {
    if (modalType.value === 'create') {   
        const isSuccessful = citiesStore.findAndCreateNodeById(modalData.value.id, Object.assign(modalData.value, { id: Number(modalData.value.id + 10 + Math.floor(Math.random() * 1000)) }));

        if (isSuccessful) {
            closeModal();
        }
    }
    if (modalType.value === 'edit') {
        const isSuccessful = citiesStore.findAndUpdateNodeById(modalData.value.id, modalData.value);

        if (isSuccessful) {
            closeModal();
        }
    }
}
function closeModal () {
    modalShow.value = false;
}

// Context Functions
function handleContextAction (type) {
    if (type === 'create') {
        modalShow.value = true;
        modalTitle.value = 'Добавить';
        modalConfirmText.value = 'Сохранить';
        modalData.value.name = '';
        modalType.value = 'create';
    }
    if (type === 'edit') {
        modalShow.value = true;
        modalTitle.value = 'Изменить';
        modalConfirmText.value = 'Изменить';
        modalType.value = 'edit';
    }
    if (type === 'remove') {
        const isSuccessful = citiesStore.findAndRemoveNodeById(modalData.value.id);

        if (isSuccessful) {
            modalData.value = { name: '', id: 0, type: '' };
        }
    }
}

// Hooks
onMounted(() => {
    window.addEventListener('click', () => { contextShow.value = false });
});
</script>

<template>
    <TreeView
        :children="citiesStore.list"
        class="w25"
        @item-click="handleClickOnTreeElement"
        @context-menu="handleTreeContext"
    />

    <Teleport to="body">
        <CitiesModal
            :show="modalShow"
            :confirm-text="modalConfirmText"
            :title="modalTitle"
            :data="modalData"
            @update-model="setModalDataModel"
            @confirm="confirmModal"
            @close="closeModal"
        />
        <CitiesContext
            :show="contextShow"
            :actions="contextActions"
            :event="contextEvent"
            @action-clicked="handleContextAction"
        />
    </Teleport>
</template>