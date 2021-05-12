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
    fetch(
      'https://res.cloudinary.com/ibnabubakre/raw/upload/v1620820819/stores.json'
    )
      .then((res) => res.json())
      .then((stores) => {
        this.stores = stores;
      });
  },
};
</script>
