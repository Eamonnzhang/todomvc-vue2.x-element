export default {
    fetch(){
        return JSON.parse(localStorage.getItem('todo-vue2.x') || '[]')
    },
    store(todos){
        localStorage.setItem('todo-vue2.x',JSON.stringify(todos))
    }
}