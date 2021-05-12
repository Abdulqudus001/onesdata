<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <base-loader />
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
      loadingStores: true,
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
    this.loadingStores = true;
    fetch(
      'https://res.cloudinary.com/ibnabubakre/raw/upload/v1620820819/stores.json'
    )
      .then((res) => res.json())
      .then((stores) => {
        // this.loadingStores = false;
        this.stores = stores;
      });
  },
};
</script>
