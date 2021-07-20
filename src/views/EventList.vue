<template>
  <h1>Todos setup already</h1>
  <div class="my-4">
    <ul v-for="(todo, index) in todolist" :key="todo" class="text-gray-500">
      <label class="inline-flex items-center mt-3">
        <li>
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-pink-600"
            @click="deleteItem(index)"
          />
          ID: {{ todo.id }} <em>Task:</em>{{ todo.label }} <b>Type:</b
          >{{ todo.type }}
        </li>
      </label>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { EventItem } from '../types'
import { useStore } from 'vuex'
//import EventCard from '../components/EventCard.vue'
//import EventService from '../services/EventService'

export default defineComponent({
  name: 'EventList',
  setup() {
    // const count = ref(0)
    // const increase = () => {
    //   return count.value++
    // }
    const newItem = ref('')
    const store = useStore()
    const todolist = computed(() => {
      return store.getters['list/getlist']
    })
    console.log(store)
    // const addItem = () => {
    //   store.dispatch('list/addTodo', newItem.value)
    //   newItem.value = ''
    // }
    const deleteItem = (index: number) => {
      console.log('Todo', index, typeof index)
      alert('Are you sure you want to delete this task?')
      setTimeout(() => store.dispatch('list/deleteTodo', index), 300)
    }
    return { todolist, newItem, deleteItem }
  },
  // components: {
  //   EventCard
  // },
  data() {
    return {
      events: [] as EventItem[]
    }
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
