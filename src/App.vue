<template>
  <NavbarComponent/>

  <router-view></router-view>


</template>

<script>
import NavbarComponent from './components/partials/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>