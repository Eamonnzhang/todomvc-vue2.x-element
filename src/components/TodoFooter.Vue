<template>
    <div class="footer">
        <el-radio class="radio" @click.native="setFilter('all')" v-model="radio" label="1">All</el-radio>
        <el-radio class="radio" @click.native="setFilter('active')" v-model="radio" label="2">Active</el-radio>
        <el-radio class="radio" @click.native="setFilter('completed')" v-model="radio" label="3">Completed</el-radio>
    </div>
</template>
<script>
    import {eventHub} from './EventHub.js'
    export default {
        name : 'todo-footer',
         data () {
            return {
                radio: '1'
            };
        },
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