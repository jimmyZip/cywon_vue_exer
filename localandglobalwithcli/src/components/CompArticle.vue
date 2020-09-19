<template>
  <div class="container">
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima quasi asperiores. Nihil, sequi reprehenderit? Id non tempora cupiditate provident nemo itaque quae repellat dignissimos quidem, nisi eum esse reiciendis.
      </div>
      <child-component/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
    //added to exercise local component usage
    components: {
        'child-component': ChildComponent
    }
}
</script>

<style scoped>
    div {
        background-color: #00897b;
        color: #fff;
        padding: 10px 20px;
    }
</style>