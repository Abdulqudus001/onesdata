<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import dateMixin from '@/mixins/formatDate';

export default {
  name: 'Home',
  mixins: [dateMixin],
  data () {
    return {}
  },
  computed: {
    welcomeMessage () {
      return 'Welcome! Your local time is: ' + this.currentTime;
    }
  },
  mounted() {}
}
</script>
