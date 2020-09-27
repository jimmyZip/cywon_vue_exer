<template>
  <div class="home">
    <h1>Home</h1>
    <!-- 크기 확장 가능한 v-container -->
    <v-container fluid>
      <!-- layout 1 -->
      <v-layout row wrap>
        <v-flex xs12 md6 class="primary white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
        <v-flex xs4 md2 class="green white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
        <v-flex xs4 md2 class="green white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
        <v-flex xs4 md2 class="green white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
      </v-layout>
      <!-- layout 2 -->
      <v-layout row wrap>
        <v-flex xs4 md3 class="teal white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
        <v-flex xs4 md3 class="teal white--text">
          <div>
            {{ message }}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
