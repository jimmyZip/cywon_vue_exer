<template>
  <div>
    <!-- <v-toolbar text app dark color="teal"> -->
    <v-toolbar dense dark>
      <!-- console.ts?522c:38 [Vuetify] [BREAKING] 'flat' has been removed, use 'text' instead. -->
      <v-app-bar-nav-icon
        class="white--text hidden-sm-and-up"
        @click="nav_drawer = !nav_drawer"
        v-if="$vuetify.breakpoint.xsOnly"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Best Travel</span>
        <span>Tips</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          text
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      app
      v-model="nav_drawer"
      class="hidden-sm-and-up"
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="link in links"
            :key="link.name"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon left>
                {{ link.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      nav_drawer: false,
      group: null,
      links: [
        {
          icon: 'home',
          text: '홈',
          name: 'home',
          route: '/'
        },
        {
          icon: 'place',
          text: '관광명소',
          name: 'attractions',
          route: '/attractions'
        },
        {
          icon: 'account_circle',
          text: '로그인',
          name: 'login',
          route: '/login'
        }
      ]
    }
  },
  watch: {
    group () {
      this.nav_drawer = false
    }
  }
}
</script>
