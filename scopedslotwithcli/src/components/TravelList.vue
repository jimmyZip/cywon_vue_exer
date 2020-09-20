<template lang="html">
  <div>
    <p>
      <input v-model="inputFilter" /><!-- 양방향 바인딩 -->
    </p>
    <!--
      단순히 자식에서 부모 컴포넌트로 데이터 전달 버전
      <slot :childitems="childitems" />
    -->
    <slot :items="filteredList" />
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      inputFilter: '',
      childitems: ['one', 'two', 'three']
    }
  },
  computed: {
    filteredList() {
      return this.items.filter(item => item.includes(this.inputFilter))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
