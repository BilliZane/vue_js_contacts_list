<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    document.title = 'Contact list'
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 15px 35px 15px;
}

.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
