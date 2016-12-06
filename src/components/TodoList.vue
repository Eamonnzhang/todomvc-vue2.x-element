<template>
    <div class="km-todolist">
        <ol>
            <li v-for="(item,index) in todos">
                {{item}}
                <button @click="removeTodo(index)">X</button>
            </li>        
        </ol>
    </div>
</template>

<script>
    export default {
        name : 'todo-list',
        props : ['todos'],
        data(){
            return {
                list : [
                    'item1',
                    'item2',
                    'item3'
                ]
            }
        },
        methods : {
            removeTodo(index){
                this.todos.splice(index,1)
            },
        }
    }
</script>

<style lang="sass">

</style>