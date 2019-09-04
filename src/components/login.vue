<template>
        <div>
            <input type = "text" v-model="message">
            <button class="login" @click="start">start</button>
        </div>
    </template>

    <script>
            export default {
                data: function(){
                    return{
                        message: ""
                    };
                },
                methods: {
                    start: function(){
                        this.$router.push('/welcome/'+this.message)
                    }
                }
            };
        </script>
        <style scoped>
        
        </style>