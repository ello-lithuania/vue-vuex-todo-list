<template>

  <div class="container-fluid">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Create your to-do list</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <router-link :to="{name:'IssuesOpen'}" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Open issues</router-link>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://hbr.org/resources/images/article_assets/2022/08/Aug22_03_1326231067.jpg" alt="" width="720">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MainHome',
}
</script>