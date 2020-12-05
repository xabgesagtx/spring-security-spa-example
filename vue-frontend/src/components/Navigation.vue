<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-navbar-brand to="/">spring-security-example</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/hello">Hello (secured)</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Navigation extends Vue {

}
</script>

<style scoped>

</style>