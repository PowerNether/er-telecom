<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<style>
    .wrapper {
        flex-grow: 1;
        
        width: 100%;
        height: 100%;

        max-width: 1540px;

        margin: 0 auto;
    }
</style>