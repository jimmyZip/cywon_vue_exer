<template>
  <div>
    <app-navigation></app-navigation>
    <!-- [Vuetify] [UPGRADE] 'v-content' is deprecated, use 'v-main' instead. -->
    <!-- <v-content> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- </v-content> -->
    <!-- app-navigation을 통해 최상단에 항상 웹사이트 탐색기능 배치 -->
    <!-- router-view 를 통해 지정된 경로에 일치하는 컴포넌트를 렌더링-->
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
export default {
  name: 'App',
  components: { AppNavigation }
}
</script>
