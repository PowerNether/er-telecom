<script setup>
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false
    },
    confirmText: {
        type: String,
        default: 'Сохранить'
    }
});

defineEmits([ 'confirm', 'close' ])
</script>

<template>
    <div
        v-show="isShow"
        class="modal"
        @click.self="$emit('close')"
    >
        <div class="modal__content">
            <div class="modal__head">
                <h3 class="modal__title">
                    <slot name="title" />
                </h3>
            </div>
            <div class="modal__body">
                <slot name="body" />
            </div>
            <div class="modal__foot">
                <button
                    class="button"
                    @click="$emit('confirm')"
                >
                    {{ confirmText }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        padding: 16px;

        background-color: rgba(0, 0, 0, .25);
    }

    .modal__content {
        width: 320px;

        border-radius: 8px;
        background: #FFFFFF;
    }

    .modal__head {
        padding: 16px 16px 0;
    }
    .modal__body {
        padding: 0 16px;
    }
    .modal__foot {
        padding: 16px 16px 16px;
    }

    .modal__title {
        margin: 0 0 16px;
    }
</style>
