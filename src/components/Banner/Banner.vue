<template>
  <div class="banner">
    <div class="banner__wrapper">
      <div class="banner__text">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import './Banner.scss';
</style>
<script>
export default {
  name: 'Banner'
}
</script>
