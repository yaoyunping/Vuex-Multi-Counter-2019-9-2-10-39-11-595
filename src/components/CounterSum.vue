<template>
    <div class="counter-sum">
        <h2>
            Counter Sum: <span>{{counterSum}}</span>
        </h2>
    </div>
</template>

<script>
    export default {
        name: 'counter-sum',
        computed:{
             counterSum: function () {
                 let sum = this.$store.state.totalSum;
                if (sum >= 10) {
                    this.$router.push({ path: '/' })
                }
                return sum;
            }
        }
    }
</script>
<style scoped>

</style>
