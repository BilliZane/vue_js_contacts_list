<template>
  <div class="contacts">
    <h1 class="contacts__title">List</h1>

    <SingleContact
      v-for="user in firstFiveUsers"
      :key="user.id"
      :user="user"
      :usersLength="users.length"
      @delete-user="deleteUser"
    />
  </div>
</template>
<script>
import SingleContact from '@/components/SingleContact'
export default {
  components: { SingleContact },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => (this.users = data))
      .catch((error) => console.log(error))
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    deleteUser (id) {
      this.users = this.users.filter((user) => user.id !== id)
    }
  },
  computed: {
    firstFiveUsers () {
      return this.users.filter((_, i) => i + 1 <= 5)
    }
  }
}
</script>
<style lang="scss">
.contacts {
  margin-top: 30px;
  &__title {
    font-size: 36px;
    margin-bottom: 40px;
    color: #000;
  }
  &__message {
    font-size: 34px;
    color: #888888;
    text-align: center;
  }
}
</style>
