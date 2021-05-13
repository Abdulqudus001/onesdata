<template>
  <div>
    Here's your secret formula
    <Banner>
      <ul>
        <li
          v-for="(value, key) in formula"
          :key="key"
        >
          {{ key }} : {{ value }}
        </li>
      </ul>
    </Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner'

export default {
  components: { Banner },
  computed: {
    formula() {
      const { params } = this.$route;
      return params;
    }
  },
  mounted() {
    const { params } = this.$route;
    console.log(params);
    if (Object.keys(params).length < 1) {
      this.$router.push({ name: 'Meals' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>