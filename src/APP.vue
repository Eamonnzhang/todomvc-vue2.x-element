<template>
     <div id="app">
        <h1>{{msg}}</h1>
        <hello></hello>
     </div>
</template>

<script>    
import Hello from './components/Hello.vue';
export default {
    name : 'app',
    data () {
        return {
            msg: 'TodoMVC-Vue2.x'
        }
    },
    components :{
        Hello
    }
}
</script>

<style lang="sass"> 

</style>