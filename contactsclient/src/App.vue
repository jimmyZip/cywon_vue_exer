<template>
  <v-app>
    <v-content>
      <h2>연락처 리스트</h2>
      <data-table></data-table>
    </v-content>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable';

export default {
  name: 'App',

  components: {
    DataTable
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  h2 {
    margin-top: 20px;
    margin-left: 10px;
    coloe:#00f;
  }
</style>
