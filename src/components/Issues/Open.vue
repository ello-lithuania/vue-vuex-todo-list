<template>

<div class="container mt-5">
  <div class="row">

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Task name</label>
        <input type="text" v-model="this.name" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Description</label>
        <input type="text" v-model="this.description" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>

  </div>
</div>

<hr/>

<div class="container">
  <div class="row">
    <div class="col-3" v-for="item in tasks" :key="item.name">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <input :value="item.description" @input="inputDescChange($event, item.id)"/>
          <hr/>
          <button @click.prevent="doneTask(item.id)" class="btn btn-primary">Done</button>
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
  name: 'OpenIssues',
  data() {
    return { 
      name: '',
      description: '',
      status: 'done',
      id: Math.floor(900000 * Math.random()) + 100000,
      trash: 'false'
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'getTasksOpens'
    })
  },
  methods: {
    submit() {
      this.$store.commit('addTodoTask', {
        name: this.name,
        description: this.description,
        status: 'open',
        id: this.id,
        trash: this.trash
      })
      this.name = ''
      this.status = ''
      this.description = ''
      this.id = Math.floor(900000 * Math.random()) + 100000
    },
    trashTask(task) {
      this.$store.commit('trashTodoTask', {
        id: task,
      })
    },
    doneTask(task) {
      this.$store.commit('doneTodoTask', {
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