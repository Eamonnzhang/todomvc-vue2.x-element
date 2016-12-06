<template>
    <div class="hello">
        <h2>Hello.vue</h2>
        <p>{{message}}
            <span>yellow</span>
        </p>
    </div>
</template>

<script>
    export default {
        name : 'hello',
        data(){
            return {
                message : 'Hello.vue message'
            }
        }
    }
</script>

<style lang="sass">
    h2{
        font-size: 16px;
        color: red;
        p {
            color: blue;
        }
    }
    p{
        text-align: center;
        span {
            color : yellow;
        }
    }
</style>