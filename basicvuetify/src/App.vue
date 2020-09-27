<template>
  <v-app>
    <!-- <v-content> -->
      <!-- v-content deprecated -->
      <!-- <home></home> -->
      <!-- <homebutton /> -->
    <!-- </v-content> -->
    <v-main>
      <!-- <home></home> -->
      <!-- <homebutton /> -->
      <!-- <homegrid /> -->
      <!-- <ModalDlg /> -->
      <LogFormDlg />
    </v-main>
  </v-app>
</template>

<script>
//import home from './components/Home';
//import homebutton from './components/Homebutton';
//import homegrid from './components/Homegrid';
//import ModalDlg from './components/ModalDlg';
import LogFormDlg from './components/LogFormDlg';

export default {
  name: 'App',

  components: {
    //home
    //homebutton
    //homegrid
    //ModalDlg
    LogFormDlg
  }
};
</script>
