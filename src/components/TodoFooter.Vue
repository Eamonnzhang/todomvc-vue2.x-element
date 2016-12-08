<template>
    <div class="footer">
        <el-button size="small" @click="setFilter('all')" :autofocus="true" :plain="true" type="info">All</el-button>
        <el-button size="small" @click="setFilter('active')">Active</el-button>
        <el-button size="small" @click="setFilter('completed')">Completed</el-button>
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
    .footer{
        border-top:1px solid #eee;
        padding-top: 10px;
    }
</style>