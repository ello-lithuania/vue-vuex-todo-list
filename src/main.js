import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
    state () {
      return {
        issues: []
      }
    },
    mutations: {
      addTodoTask (state, task) {
        state.issues.push(task)
      },
      trashTodoTask (state, task) {
        let tempArray = state.issues
        tempArray.map(item => {
          if(item.id === task.id) {
            item.trash = 'true'
          }
        })
        state.issues = tempArray
      },
      doneTodoTask (state, task) {
        let tempArray = state.issues
        tempArray.map(item => {
          if(item.id === task.id) {
            item.status = 'done'
          }
        })
        state.issues = tempArray
      },
      notDoneTodoTask (state, task) {
        // mutate state
        let tempArray = state.issues
        tempArray.map(item => {
          if(item.id === task.id) {
            item.status = 'open'
          }
        })
        state.issues = tempArray
      },
      notTrashTask (state, task) {
        // mutate state
        let tempArray = state.issues
        tempArray.map(item => {
          if(item.id === task.id) {
            item.trash = 'false'
          }
        })
        state.issues = tempArray
      },
      editTodoTask (state, task) {
        // mutate state
        let tempArray = state.issues
        tempArray.map(item => {
          if(item.id === task.id) {
            item.description = task.description
          }
        })
        state.issues = tempArray
      },
    },
    getters: {
      getTasksOpens: state => { return state.issues.filter(issue => issue.status === "open" && issue.trash === "false")},
      getTasksDone: state => { return state.issues.filter(issue => issue.status === "done" && issue.trash === "false")},
      getTasksTrash: state => { return state.issues.filter(issue => issue.trash === "true")},
    },
    actions: {},
    plugins: [vuexLocal.plugin],
});

createApp(App).use(router).use(store).mount('#app')
