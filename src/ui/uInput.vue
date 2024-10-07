<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: null
    }
});

const modelValue = defineModel({ type: String });
</script>

<template>
    <div class="uInput">
        <input
            v-model="modelValue"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            class="uInput__field"
        >
        <label
            :name="name"
            class="uInput__label"
        >
            {{ placeholder }}
        </label>
    </div>
</template>

<style>
    .uInput {
        position: relative;

        border-radius: 5px;
        border: 1px solid #E6E6E6;
        background: #F9F9F9;
    }

    .uInput__field {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.2px;
        color: var(--text-color, #252B42);

        width: 100%;

        padding: 16px 12px 4px;

        border: unset;
        background-color: unset;
        
        box-sizing: border-box;
    }
    .uInput__field:focus {
        outline: unset;
    }
    .uInput__field::placeholder {
        color: transparent;
    }
    
    .uInput__label {
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.2px;
        color: var(--second-text-color, #737373);
        
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);

        pointer-events: none;

        transition: font-size .35s, top .35s, transform .35s;
    }

    .uInput__field:focus ~ .uInput__label,
    .uInput__field:not(:placeholder-shown) ~ .uInput__label {
        font-size: 12px;
        line-height: 12px;

        top: 4px;
        transform: translateY(0%);
    }
</style>