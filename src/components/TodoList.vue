<template>
    <div class="km-todolist">
        <ol>
            <li v-for="(item,index) in filterTodos" :class="{complete:item.completed}">
                <span>{{item.value}}</span>
                <button @click="removeTodo(index)">删除</button>
                <button @click="toggleTodo(item)" :class="{complete:item.completed}">完成</button>
            </li>        
        </ol>
    </div>
</template>

<script>
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
        methods : {
            removeTodo(index){
                this.todos.splice(index,1)
            },
            toggleTodo(item){
                item.completed = !item.completed
            }
        },
        computed : {
            filterTodos(){
                return filter[this.filter](this.todos)
            }
        }
    }
</script>

<style lang="sass">
    li.complete{
        span{
            text-decoration: line-through;
        }
    }
    button.complete{
        background-color: #fff;
    }
</style>