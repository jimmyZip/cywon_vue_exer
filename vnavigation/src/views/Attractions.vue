<template>
  <div class="attractions">
    <v-app>
      <v-container fluid class="my-4">
        <v-layout row wrap>
          <v-flex
            xs12 sm6 md4 lg3
            v-for="country in countries"
            :key="country.name"
          >
            <v-col class="ma-2">
              <v-card
                color="indigo lighten-5"
                flat
                class="ma-1"
              >
                <v-img height="200px" :src="country.pic">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-col xs12>
                        <span class="headline white--text">
                          Top 10 Tourist Attractions in {{ country.name }}
                        </span>
                      </v-col>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-text>
                  <div class="teal--text darken-4">
                    {{ country.name }}
                  </div>
                  <span>
                    {{ country.role }}
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="deep-purple accent-4"
                    @click="goTo(country.name)"
                  >
                    go to {{ country.name }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countries: [
        {
          name: 'Netherland',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/amsterdam.jpg')
        },
        {
          name: 'Germany',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/dresden.jpg')
        },
        {
          name: 'Swiss',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/swiss.jpg')
        },
        {
          name: 'Italy',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/venezia.jpg')
        },
        {
          name: 'Austria',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/vienna.jpg')
        },
        {
          name: 'France',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/paris.jpg')
        },
        {
          name: 'Czech',
          role: 'Lorem ipsum dolor sit amet.',
          pic: require('@/assets/praque.jpg')
        }
      ]
    }
  },
  methods: {
    goTo (value) {
      alert(value + ' 로 이동')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
