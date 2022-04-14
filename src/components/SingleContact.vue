<template>
  <div class="single-contact">
    <div class="single-contact__row">
      <div class="single-contact__col">
        <div class="single-contact__name">{{ user.name }}</div>
        <div class="single-contact__city">{{ user.address.city }}</div>
      </div>
      <div class="single-contact__col single-contact__col-items">
        <span class="single-contact__num">#{{ user.id }}</span>
        <router-link :to="{name: 'ContactDetails', params: {id: user.id}}">
          <button class="single-contact__view-btn">View</button>
        </router-link>
        <button
          class="single-contact__delete-btn"
          :disabled="usersLength === 1"
          @click="deleteUser(user.id)"
        >
          {{ usersLength !== 1 ? 'Delete' : 'Blocked' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user', 'usersLength'],
  methods: {
    deleteUser (id) {
      this.$emit('delete-user', id)
    }
  }
}
</script>

<style lang="scss">
.single-contact {
  margin: 20px 0;
  border-bottom: 1px solid #e0e0e0;

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__col-items {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding-bottom: 10px;
  }
  &__city {
    padding-bottom: 7px;
    font-size: 14px;
    font-weight: 400;
    color: #4f4f4f;
    letter-spacing: 0.5px;
  }
  &__num {
    margin-right: 20px;
    padding-top: 8px;
    align-self: flex-start;
    font-size: 16px;

    @media (max-width: 370px) {
      margin-right: 12px;
    }
  }
  &__view-btn {
    color: #fff;
    background: #585858;
    margin-right: 9px;
    padding: 12px 14px;
    letter-spacing: 0.5px;
    transition: background 400ms;

    &:hover {
      background: #888888;
      cursor: pointer;
    }
  }
  &__delete-btn {
    color: #4f4f4f;
    background: #e0e0e0;
    padding: 12px 14px;
    letter-spacing: 0.5px;
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
