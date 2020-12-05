<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h3>Login</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-form @submit.prevent="submit">
          <b-form-group>
            <label>Username
              <b-input type="text" id="username" v-model="username"></b-input>
            </label>
          </b-form-group>
          <b-form-group>
            <label>Password
              <b-input type="password" id="password" v-model="password"></b-input>
            </label>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" :disabled="disabled">submit</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {UserInfoService} from "@/modules/user-info-service";

@Component
export default class Login extends Vue {
  userInfoService = new UserInfoService()
  username = ''
  password = ''
  redirectFrom = '/'

  get disabled() {
    return !this.username || !this.password
  }

  async submit() {
    try {
      const userInfo = await this.userInfoService.userInfo(this.username, this.password)
      alert('Logged in as ' + userInfo.name)
      await this.$router.push(this.redirectFrom)
    } catch (e) {
      alert('Failed to login: ' + e.message)
    }
  }

  created() {
    const redirectFrom = this.$route.query.redirectFrom;
    if (redirectFrom) {
      this.redirectFrom = redirectFrom
    }
  }
}
</script>

<style scoped>

</style>