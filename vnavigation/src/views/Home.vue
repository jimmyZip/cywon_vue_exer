<template>
  <span>
    <home-head></home-head>
    <home-body></home-body>
  </span>
</template>

<script>
// @ is an alias to /src
import HomeHead from '@/components/HomeHead.vue'
import HomeBody from '@/components/HomeBody.vue'

export default {
  components: {
    HomeHead, HomeBody
  }
}
</script>
