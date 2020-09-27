<template lang="html">
  <div class="intro container">
    <div class="card">
      <div class="card-content center-align">
        <h4 class="white-text left">여행이란?</h4>
        <form @submit.prevent="enterChat">
          <input type="text" name="name" v-model="name"/>
          <p
            v-if="feedback"
            class="red-text"
          >
            {{ feedback }}
          </p>
          <button class="btn teal">입장하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelIntro',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      // 3항연산자 이용
        // name값이 입력되면 push() 메서드를 이용해 입력딘 이름을 Chat 컴포넌트에 전달하고
        // name값이 입력되지 않은 상태에서 전송 누르면 feedback에 예외처리 메시지 주입해 표츌
      (this.name)? this.$router.push({
        name: 'Chat',
        params: {
          name: this.name
        }
      }) : this.feedback = "대화를 하려면 이름을 입력하세요."
    }
  }
}
</script>

<style lang="css" scoped>
  .intro {
    max-width: 480px;
    margin-top: 50px;
    font-size: 2rem;
  }
  p {
    font-size: 12px;
  }
  .card {
    background-image: url('../assets/paris.jpg')
  }
</style>
