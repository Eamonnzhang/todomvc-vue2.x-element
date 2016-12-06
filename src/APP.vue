<template>
     <div id="app">
         <h2>{{msg}}</h2>
        <my-input></my-input>
        <todo-list :todos="todos" :filter="filter"></todo-list>
        <todo-footer></todo-footer>
     </div>
</template>

<script>    
import MyInput from './components/Input.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import {eventHub} from './components/EventHub.js';
export default {
    name : 'app',
    data () {
        return {
            todos : [],
            filter : 'all',
            msg:'Vue2.x TodoMVC'
        }
    },
    created(){
        eventHub.$on('add-todo',this.addTodo)
        eventHub.$on('set-filter',this.setFilter)
    },
    methods : {
        addTodo(newTodo){
            this.todos.push({value:newTodo,completed:false})
        },
        setFilter(newfilter){
            this.filter = newfilter
        }
    },
    components :{
        MyInput,
        TodoList,
        TodoFooter
    }
}
</script>

<style lang="sass"> 

</style>