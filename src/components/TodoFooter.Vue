<template>
    <div class="footer">
        <button @click="setFilter('all')">All</button>
        <button @click="setFilter('active')">Active</button>
        <button @click="setFilter('completed')">Completed</button>
    </div>
</template>
<script>
    import {eventHub} from './EventHub.js'
    export default {
        name : 'todo-footer',
        methods : {
            setFilter(filter){
                eventHub.$emit('set-filter',filter)
            }
        }
    }
</script>
<style>
    ul li{
        list-style-type: none
    }
</style>