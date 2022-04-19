<template>
  <footer class="footer">
    <router-link
      :to="{name: 'Home'}"
      class="footer__btn"
      v-if="userLength !== 0"
      >Back to the list</router-link
    >
  </footer>
</template>

<script>
export default {
  props: ['userLength'],
}
</script>

<style lang="scss">
.footer {
  padding: 20px 0;
  text-align: center;
  font-weight: 400;
  &__btn {
    color: #4f4f4f;
    background: #e0e0e0;
    padding: 6px 14px;
    letter-spacing: 0.5px;
    border-radius: 3px;
    transition: background 400ms, color 400ms;
    &:hover {
      background: #888888;
      color: #fff;
      cursor: pointer;
    }
    &:disabled {
      color: #fff;
      background: #cac9c9;
    }
  }
}
</style>
