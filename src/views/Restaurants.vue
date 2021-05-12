<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import StoreList from '@/components/StoreList/StoreList';
import dateMixin from '@/mixins/formatDate';

export default {
  name: 'Stores',
  mixins: [dateMixin],
  components: {
    StoreList,
  },
  data() {
    return {
      stores: [],
    };
  },
  computed: {
    welcomeMessage() {
      return (
        'Welcome to our restaurants list! Your local time is: ' +
        this.currentTime
      );
    },
  },
  mounted() {
    const stores = require('@/assets/stores/stores.json');
    this.stores = stores;
  },
};
</script>
