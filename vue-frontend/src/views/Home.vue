<template>
  <div>
    <b-jumbotron>
      <h3>Welcome to a spring security SPA example</h3>
      <div>This example includes
        <ul>
          <li>vue-frontend</li>
          <li>a secured api gateway (basic auth)</li>
          <li>a simple hello-world microservice</li>
        </ul>
      </div>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
