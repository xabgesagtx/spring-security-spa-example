<template>
  <div>
    <h3>The backend says hello to {{hello}}</h3>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  hello = ''

  created() {
    this.hello = this.$route.meta.hello
  }
}
</script>

<style scoped>

</style>