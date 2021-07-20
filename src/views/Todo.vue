<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { TodoItem } from '../types'
import { useStore } from 'vuex'
//import EventService from '../services/EventService'

export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'work'
      } as TodoItem
    })

    // const newItem = ref()
    const newItem = ref({
      label: '',
      type: 'work'
    })
    const store = useStore()

    const addTask = () => {
      store.dispatch('list/addTodo', newItem.value).then(() => {
        // newItem.value.label = ''
        // newItem.value.type = 'personal'
      })
      //console.log(newItem.value)
      //newItem.value = ''
      // console.log(newItem.value.label)
      // newItem.value.label = ''
      // //console.log(state.newTask.label)
      // state.newTask.type = 'personal'
    }

    return {
      ...toRefs(state),
      addTask,
      newItem
    }
  }
})
</script>

<template>
  <div class="todo-page">
    <h1>Todo</h1>
    <form @submit.prevent>
      <div class="mb1">
        <label for="task-label">Task Label: </label>
        <input type="text" id="task-label" v-model="newItem.label" />
      </div>
      <div class="mb1">
        <label for="task-type">Take Type: </label>
        <select name="task-type" id="task-type" v-model="newItem.type">
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button @click="addTask">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
}

.mb1 {
  margin-bottom: 1rem;
}
</style>
