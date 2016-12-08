<template>
     <div id="app">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <div class="h1">{{msg}}</div>
            <todo-input></todo-input>
        </div>
        <todo-list :todos="todos" :filter="filter"></todo-list>
        <todo-footer></todo-footer>
        </el-card>
     </div>
</template>

<script>    
import TodoInput from './components/Input.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import {eventHub} from './components/EventHub.js';
import Storage from './Storage.js';
export default {
    name : 'app',
    data () {
        return {
            todos : Storage.fetch(),
            filter : 'all',
            msg:'Vue2.x TodoMVC'
        }
    },
    watch : {
        todos : {
            deep: true,
            handler: Storage.store
        }
    },
    created(){
        eventHub.$on('add-todo',this.addTodo)
        eventHub.$on('set-filter',this.setFilter)
    },
    methods : {
        addTodo(newTodo){
            if(!newTodo){
                console.log(this.$refs);
                this.$refs.todoInput.click()
                return;
            }
            this.todos.push({value:newTodo,completed:false})
            Storage.store(this.todos)
        },
        setFilter(newfilter){
            this.filter = newfilter
            Storage.store(this.todos)
        }
    },
    components :{
        TodoInput,
        TodoList,
        TodoFooter
    }
}
</script>

<style lang="sass"> 
    body{
        background-color: #F9FAFC;
    }
    #app{
        width: 560px;
        margin: 0 auto;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .h1{
        color: #5e6d82;
        font-size : 20px;
        text-align : center;
        padding: 20px 0;
    }
   
</style>