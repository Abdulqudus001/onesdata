<template>
  <div class="store" v-if="isVisible">
    <div class="store__wrapper">
      <h2 class="store__title">{{ title }}</h2>
      <span class="store__location">{{ location }}</span>
      <div class="store__joke">
        <b>Joke</b>: <span>{{ joke }}</span>
      </div>
      <img :src="photo" :alt="title" :title="title" />
    </div>
  </div>
</template>
<style lang="scss">
@import './Store.scss';
</style>
<script>

export default {
  name: 'Store',
  props: {
    title: {
      type: String,
      default: null
    },
    location: {
      type: String,
      default: null
    },
    joke: {
      type: String,
      default: null
    },
    photo: {
      type: String,
      default: null
    }
  },
  computed: {
    isVisible () {
      return !!this.title && !!this.location;
    }
  }
}
</script>
