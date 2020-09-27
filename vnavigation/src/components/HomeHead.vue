<template lang="html">
  <v-app>
    <v-container fluid fill-height class="home-head">
      <v-layout justify-center align-center column pa-5>
        <div class="display-4 font-weight-black white--text text-x5-center">
          JUNGFRAJOCH
        </div>
        <div class="display-4 font-weight-black white--text text-x5-center">
          TOP OF EUROPE
        </div>
        <div class="display-1 font-weight-black white--text text-x5-center">
          Join a memorable trip to Jungfraujoch and the Top of Europe
        </div>
        <!--
          display-4, display-1은 font-size설정(h1, h4)
          https://vuetifyjs.com/en/framework/typography 참고
        -->
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'HomeHead'
}
</script>

<style lang="css" scoped>
  .home-head {
    background: url('~@/assets/interlaken.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
