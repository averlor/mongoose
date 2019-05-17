<template>
  <div id="app" class="wrapper">
    <AddNewTodo/>
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import AddNewTodo from './components/AddNewTodo.vue'

export default {
  name: 'app',
  components: {
    AddNewTodo,
    TodoItem
  }
}
</script>

<style>

</style>
