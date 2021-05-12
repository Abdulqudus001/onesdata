<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in storesWithImages" :key="store.id" />
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Store from '@/components/Store/Store';

export default {
  name: 'StoreList',
  components: {
    Store
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    storesWithImages () {
      return this.stores.map(store => {
        return {
          ...store,
          image: 'https://via.placeholder.com/300?text=' + store.name
        }
      })
    },
    storesCount () {
      return this.stores.length;
    }
  }
}
</script>
