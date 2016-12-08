<template>
    <div class="km-input-wrap">
        <el-input
            class="inline-input" 
            size="large"
            placeholder="What needs to be done?"
            @keyup.enter.native="addNewTodo" 
            ref="todoInput"
            v-model.trim='todoItem'>
        </el-input>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
import {eventHub} from './EventHub.js';
export default {
    name : 'todo-input',
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