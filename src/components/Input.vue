<template>
    <div class="km-input-wrap">
        <input @keyup.enter="addNewTodo" placeholder="add new todo" v-model='todoItem'>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import Vue from 'vue';
import {eventHub} from './EventHub.js';
export default {
    name : 'my-input',
    data(){
        return {
            todoItem:''
        }
    },
    methods : {
        addNewTodo(){
            eventHub.$emit('add-todo',this.todoItem);
            this.todoItem = ''
        }
    },
}
</script>

<style lang="sass">

</style>