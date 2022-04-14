<template>
  <div class="details">
    <div class="details__row">
      <div class="details__useriinfo">
        <div class="details__name">{{ user.name }}</div>
        <div class="details__info">
          <span class="details__user-id">id: {{ user.id }}</span>
          <span class="details__user-name">username: {{ user.username }}</span>
          <span class="details__user-email">email: {{ user.email }}</span>
        </div>
      </div>
    </div>

    <div class="details__row">
      <div class="details__address">
        <div class="details__address-title">Address</div>
        <div class="details__address-info">
          {{ user.address.zipcode }}
          {{ user.address.city }}, {{ user.address.street }},
          {{ user.address.suite }}
        </div>
        <div class="details__address-geo">
          Geo:
          <span class="details__address-geo-text">
            lat "{{ user.address.geo.lat }}" - lng "{{ user.address.geo.lng }}"
          </span>
        </div>
      </div>
    </div>

    <div class="details__row">
      <div class="details__phone">
        <div class="details__phone-title">Phone</div>
        <div class="details__phone-number">{{ user.phone }}</div>
      </div>
    </div>

    <div class="details__row">
      <div class="details__site">
        <div class="details__site-title">Website</div>
        <a :href="siteUrl" target="__blank" class="details__site-url">{{
          user.website
        }}</a>
      </div>
    </div>

    <div class="details__row">
      <div class="details__company">
        <div class="details__company-title">Company</div>
        <div class="details__company-name">{{ user.company.name }}</div>
        <div class="details__company-phrase">
          {{ user.company.catchPhrase }}
        </div>
        <div class="details__company-bs">{{ user.company.bs }}</div>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script>
import Footer from '@/components/Footer'
export default {
  props: ['id'],
  components: { Footer },
  beforeMount () {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then((response) => response.json())
      .then((data) => (this.user = data))
      .catch((error) => console.log(error))
  },
  mounted () {
    document.title = "User's details"
  },
  data () {
    return {
      user: []
    }
  },
  computed: {
    siteUrl () {
      return `https://${this.user.website}`
    }
  }
}
</script>
<style lang="scss">
.details {
  padding-top: 30px;

  color: #000;
  font-weight: 400;

  &__row {
    margin-bottom: 30px;
  }
  &__name {
    font-size: 36px;
  }
  &__info {
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    font-weight: 400;
    color: #4f4f4f;
    padding-top: 8px;
  }
  &__user-id {
    padding-right: 10px;
    &::after {
      content: '|';
      width: 2px;
      padding-left: 8px;
    }
  }
  &__user-name {
    padding-right: 10px;
    &::after {
      content: '|';
      width: 2px;
      padding-left: 8px;
    }
  }

  &__address {
    &-title {
      font-size: 24px;
      padding-bottom: 20px;
    }
    &-info {
      font-size: 18px;
      font-weight: 500;
    }
    &-geo {
      font-size: 14px;
      font-weight: 500;
      padding-top: 8px;
    }
    &-geo-text {
      font-weight: 400;
    }
  }
  &__phone-title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  &__phone-number {
    font-size: 18px;
    font-weight: 500;
  }
  &__site-title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  &__site-url {
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
  }
  &__company-title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  &__company-name {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 8px;
  }
  &__company-phrase {
    font-size: 15px;
    font-weight: 400;
    color: #4f4f4f;
    padding-bottom: 8px;
  }
  &__company-bs {
    font-size: 15px;
    font-weight: 400;
    color: #4f4f4f;
  }
}
</style>
