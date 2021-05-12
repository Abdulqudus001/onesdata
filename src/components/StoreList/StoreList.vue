<template>
  <div class="store-list">
    <input
      id="store"
      class="store-list__search"
      type="search"
      name="store"
      aria-label="Search store"
      placeholder="Search Store"
      v-model="storeName"
    />
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div class="store-list__items">
      <Store
        class="store-list__item"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in currentPageItems"
        :key="store.id"
      />
    </div>
    <pagination
      :items="filteredStores"
      :page-size="16"
      @changePage="onChangePage"
    ></pagination>
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Pagination from 'jw-vue-pagination';
import Store from '@/components/Store/Store';

export default {
  name: 'StoreList',
  components: {
    Store,
    Pagination,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    currentPageItems: [],
    storeName: '',
  }),
  computed: {
    filteredStores() {
      return this.storesWithImages.filter(el => el.name.toLowerCase().includes(this.storeName.toLowerCase()))
    },
    storesWithImages() {
      return this.stores.map((store) => {
        return {
          ...store,
          image: 'https://via.placeholder.com/300?text=' + store.name,
        };
      });
    },
    storesCount() {
      return this.filteredStores.length;
    },
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.currentPageItems = pageOfItems;
    },
  },
};
</script>
