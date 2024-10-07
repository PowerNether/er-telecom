<template>
    <RouterView />
</template>

<style>
@import url('@/app/styles/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body {
	font-family: 'Montserrat', sans-serif;
}

h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.2px; 
    color: var(--text-color, #252B42);
}
h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--text-color, #252B42);
}

.d-f {
    display: flex;
}
.jc-sb {
    justify-content: space-between;
}
.fd-c {
    flex-direction: column;
}
.g12 {
    gap: 12px
}
.g16 {
    gap: 16px
}
.g32 {
    gap: 32px;
}

.w25 {
    width: 25%;
}
.w75 {
    width: 75%;
}

.pt-32 {
    padding-top: 32px;
}

.button {
    font-weight: 700;
    font-size: 14px;
    line-height: 38px;
    letter-spacing: 0.2px;
    text-align: center;
    color: var(--light-text-color, #FFF);

    width: 100%;

    border: unset;
    border-radius: 5px;
    background: var(--primary-color, #23A6F0);
    filter: brightness(1);

    cursor: pointer;

    transition: filter .35s;
}
.button:hover {
    filter: brightness(.95);
}

.text {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: var(--second-text-color, #737373);
}
.link {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: var(--primary-color, #23A6F0);
}
</style>
