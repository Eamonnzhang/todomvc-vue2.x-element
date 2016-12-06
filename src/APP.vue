<template>
     <div id="app">
         <h2>{{msg}}</h2>
        <my-input></my-input>
        <todo-list :todos=todos></todo-list>
     </div>
</template>

<script>    
import MyInput from './components/Input.vue';
import TodoList from './components/TodoList.vue';
import {eventHub} from './components/EventHub.js';
export default {
    name : 'app',
    data () {
        return {
            todos : ['abc'],
            msg:'Vue2.x TodoMVC'
        }
    },
    created(){
        eventHub.$on('add-todo',this.addTodo)
    },
    methods : {
        addTodo(newTodo){
            this.todos.push(newTodo)
        }
    },
    components :{
        MyInput,
        TodoList
    }
}
</script>

<style lang="sass"> 

</style>