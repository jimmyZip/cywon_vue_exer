<template lang="html">
  <div>
    <table>
      <thead>
        <tr>
          <th>제품코드</th>
          <th>제품명</th>
          <th>가격</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.pcode"
          v-on:click="sendCode(product.pcode)"
        >
          <td>{{ product.pcode }}</td>
          <td>{{ product.pname }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          pcode: 'p01',
          pname: 'LG gram 노트북',
          desc: 'blah blah',
          price: 1745160
        },
        {
          pcode: 'p02',
          pname: 'TUMI 백팩',
          desc: 'blah blah',
          price: 200000
        },
        {
          pcode: 'p03',
          pname: '아가신발',
          desc: 'blah blah',
          price: 100000
        }
      ]
    }
  },
  methods: {
    sendCode(inCode) {
      const id = inCode;
      this.$router.push({
        name: 'productedit',
        params: {id}
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
