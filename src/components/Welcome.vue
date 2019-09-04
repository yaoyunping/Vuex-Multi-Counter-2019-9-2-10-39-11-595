<template>
    <div>
        <p>Hello {{ username }}!!!</p>
        <p>
        <router-link to="'/welcome/'+username">Welcome</router-link>
        </p>
        <router-link to="{name:'counter'}">Go to Counter</router-link>
        <p>
            <router-link to="{name:'todo'}">Go todo</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>



<script>
    export default {
        name: "Welcome",
        props: ['username']
    }
</script>