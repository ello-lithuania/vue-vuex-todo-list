<template>

<div class="container mt-5">
  <div class="row">
    <div class="col-3" v-for="item in tasks" :key="item.name">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <input :value="item.description" @input="inputDescChange($event, item.id)"/>
          <hr/>
          <button @click.prevent="notDoneTask(item.id)" class="btn btn-primary">Not Done</button>
          <button @click.prevent="trashTask(item.id)" class="btn btn-danger">Trash</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DoneIssues',
  computed: {
    ...mapGetters({
      tasks: 'getTasksDone'
    })
  },
  methods: {
    trashTask(task) {
      this.$store.commit('trashTodoTask', {
        id: task,
      })
    },
    notDoneTask(task) {
      this.$store.commit('notDoneTodoTask', {
        id: task,
      })
    },
    inputDescChange(event, task) {
      this.$store.commit('editTodoTask', {
        description: event.target.value,
        id: task
      })
    }
  }
}
</script>