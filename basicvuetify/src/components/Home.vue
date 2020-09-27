<template>
  <div class="home">
    <h1>Home</h1>
    <!--
    <p class="blue lighten-5 red--text">Lorem ipsum dolor sit amet.</p>
    <p class="blue white--text">Lorem ipsum dolor sit amet.</p>
    <p class="blue darken-3">Lorem ipsum dolor sit amet.</p>
     -->

    <!-- breakpoint, visibility -->

    <v-btn color="blue" class="hidden-xs-only">visibility -xs-only</v-btn>
    <v-btn color="blue" class="hidden-sm-only">visibility sm-only</v-btn>
    <v-btn color="blue" class="hidden-md-only">visibility -md-only</v-btn>

    <v-btn color="blue" class="hidden-md-and-down">
      visibiliy -md-and-down
    </v-btn>

    <v-btn color="teal" class="hidden-sm-and-up">viisbility -md-and-up</v-btn>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  h1{
    margin:10px;
  }
  p{
    padding: 10px;
    margin: 5px 10px;
  }
</style>
