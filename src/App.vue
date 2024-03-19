<template>
  <div class="canvas bg-dark">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container">
        <router-link class="navbar-brand" to="/"></router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.canvas {
  min-height: 100vh;
}

.navbar {
  padding: 16px 0px;
}

.navbar-brand {
  background-image: url('assets/brand.webp');
  background-size: contain;
  height: 25px;
  width: 110px;
  background-repeat: no-repeat;
}
</style>