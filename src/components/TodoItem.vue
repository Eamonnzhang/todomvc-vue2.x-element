<template>
    <li :class="{complete:todo.completed}" @click="">
        <el-checkbox v-model="todo.completed"></el-checkbox>
        <span>{{todo.value}}</span>
        <i class="el-icon-close" @click="removeTodo(index)"></i>
    </li>   
</template>
 <script>
    export default {
        name : 'todo-item',
        props:['todo','todos','index'],
        methods : {
            removeTodo(index){
                this.todos.splice(index,1)
            }
        }
    }
 </script>
 
 <style lang="sass" scoped>
    span{
        font-size: 22px;
        line-height: 22px;
    }
    i{
        float: right;
        margin-right: 15px;
        line-height: 22px;
        font-size: 12px;
        color: #F7BA2A;
    }
    span{
        margin-left: 10px;
        width: 100%;
    }
    li.complete{
        span{
            text-decoration: line-through;
            color:#ddd;
        }
    }
     li{
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        cursor: pointer;
     }
     i{
         display: none;
         opacity: 0.5;
     }
     i:hover{
         opacity: 1;
     }
    
     li:hover i{
         display: block;
     }

 </style>