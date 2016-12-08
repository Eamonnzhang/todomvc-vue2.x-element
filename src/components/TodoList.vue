<template>
    <div class="km-todolist">
        <ul id="todoList">
            <todo-item v-for="(todo,index) in filterTodos" :todos="todos" :todo="todo" :index="index"></todo-item>
        </ul>
    </div>
</template>
<script>
    import TodoItem from './TodoItem.vue'
    let filter = {
        all:function(todos){
            return todos;
        },
        active:function(todos){
            return todos.filter(function(todo){
                return !todo.completed
            })
        },
        completed:function(todos){
             return todos.filter(function(todo){
                return todo.completed
            })
        },
    }
    export default {
        name : 'todo-list',
        props : ['todos','filter'],
        computed : {
            filterTodos(){
                return filter[this.filter](this.todos)
            }
        },
        components : {
            TodoItem
        },
    }
</script>

<style lang="sass">
   
    #todoList{
        max-height: 350px;
        position: relative;
        padding: 0 20px 0 5px;
    }
</style>