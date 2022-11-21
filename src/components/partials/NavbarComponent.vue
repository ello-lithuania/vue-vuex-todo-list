<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name:'HomePage'}">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link v-bind:class="{'nav-link':true, 'active':(this.$route.name === 'IssuesOpen')}" :to="{name:'IssuesOpen'}">Open</router-link>
        </li>
        <li class="nav-item">
          <router-link v-bind:class="{'nav-link':true, 'active':(this.$route.name === 'IssuesDone')}" class="nav-link" :to="{name:'IssuesDone'}">Done</router-link>
        </li>
        <li class="nav-item">
          <router-link v-bind:class="{'nav-link':true, 'active':(this.$route.name === 'IssuesTrashed')}" class="nav-link" :to="{name:'IssuesTrashed'}">Trashed</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>