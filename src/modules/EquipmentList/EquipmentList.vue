<script setup>
import { ref, onMounted } from 'vue';
import { useCitiesStore } from '@/app/stores/cities.store';
import { EquipmentTable, EquipmentModal, EquipmentContext } from '@/components';

// Store
const citiesStore = useCitiesStore();

// Variables
const tableLabels = [
    { name: '#', width: 5, unit: '%' },
    { name: 'Название', width: 30, unit: '%' },
    { name: 'MAC', width: 20, unit: '%' },
    { name: 'IP', width: 20, unit: '%' },
    { name: 'Серийный номер', width: 20, unit: '%' }
];
const contextActions = [
    { label: 'Изменить', type: 'edit', visible: true },
    { label: 'Удалить', type: 'remove', visible: true }
];

// Reactive Variables
const modalShow = ref(false);
const modalTitle = ref('');
const modalConfirmText = ref('Сохранить');
const modalData = ref({ name: '', mac: '', ip: '', serial: '' });
const modalType = ref('');
const contextShow = ref(false);
const contextEvent = ref({ x: 0, y: 0 });

// Table Functions
function handleTableContext ($event, data) {
    $event.preventDefault();

    contextEvent.value = { x: $event.x, y: $event.y }
    contextShow.value = true;

    modalData.value = data;
}
function handleTableCreate () {
    modalShow.value = true;
    modalTitle.value = 'Добавить оборудование';
    modalConfirmText.value = 'Сохранить';
    modalData.value = { name: '', mac: '', ip: '', serial: '' };
    modalType.value = 'create';
}

// Modal Functions
function setModalDataModel (type, value) {
    modalData.value[type] = value;
}
function confirmModal () {
    if (modalType.value === 'create') {
        console.log()
        const isSuccessful = citiesStore.findAndCreateEquipmentById(citiesStore.currentElement.id, Object.assign({ id: Number(citiesStore.currentElement.id + 10 + Math.floor(Math.random() * 1000)) }, modalData.value));

        if (isSuccessful) {
            closeModal();
        }
    }
    if (modalType.value === 'edit') {
        const isSuccessful = citiesStore.findAndUpdateEquipmentById(modalData.value.id, modalData.value);

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
    if (type === 'edit') {
        modalShow.value = true;
        modalTitle.value = 'Изменить оборудование';
        modalConfirmText.value = 'Изменить';
        modalType.value = 'edit';
    }
    if (type === 'remove') {
        const isSuccessful = citiesStore.findAndRemoveEquipmentById(modalData.value.id);

        if (isSuccessful) {
            modalData.value = {};
        }
    }
}

// Hooks
onMounted(() => {
    window.addEventListener('click', () => { contextShow.value = false });
});
</script>

<template>
    <EquipmentTable
        class="w75"
        :labels="tableLabels"
        :data="citiesStore.equipments"
        :is-last="citiesStore.currentElement.type === 'entrance'"
        @context-menu="handleTableContext"
        @create="handleTableCreate"
    />

    <Teleport to="body">
        <EquipmentModal
            :show="modalShow"
            :confirm-text="modalConfirmText"
            :title="modalTitle"
            :data="modalData"
            @update-model="setModalDataModel"
            @confirm="confirmModal"
            @close="closeModal"
        />
        <EquipmentContext
            :show="contextShow"
            :actions="contextActions"
            :event="contextEvent"
            @action-clicked="handleContextAction"
        />
    </Teleport>
</template>
