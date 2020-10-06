<template>
  <v-layout justify-center>
    <v-card class="rounded-card mb-3">
      <v-card class="rounded-card mb-3">
        <v-card-title class="justify-center">
          <div>
            <h3 class="headline mb-1">
              Vue.js 뉴스 가입하기
            </h3>
          </div>
        </v-card-title>
        <!-- <v-form v-model="valid" ref="form"> -->
        <!-- @submit.prevent는 e.preventDefault()와 동일기능 -->
        <v-form
          v-model="valid" ref="myForm"
          @submit.prevent="handleSubmit"
          action="http://localhost:8080"
          method="post"
        >
          <v-text-field
            id="email"
            class="pa-2"
            name="email"
            label="이메일"
            v-model="user.email"
            :rules="emailRules"
            required
          >
          </v-text-field>
          <v-text-field
            id="password"
            class="pa-2"
            name="password"
            label="비밀번호"
            type="password"
            v-model="user.password"
            :rules="passwordRules"
            required
          >
          </v-text-field>
          <v-checkbox
            class="pl-2"
            label="진행할까요?"
            v-model="checkbox"
            :rules="checkboxRules"
            required
          >
          </v-checkbox>
          <!-- <v-btn
            @click="submit"
            :class="{red: !valid, green: valid}"
          > -->
          <v-btn
            type="submit"
            :class="{red: !valid, green: valid}"
          >
            전송
          </v-btn>
          <v-btn @click="clear">
            취소
          </v-btn>
        </v-form>
      </v-card>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      user: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || '이메일을 입력하세요.',
        v => /.+@.+/.test(v) || '유효한 이메일을 입력하세요.'
      ],
      passwordRules: [
        v => !!v || '비밀번호를 입력하세요.',
        v => v && v.length >=6 || '비밀번호는 적어도 6자리 이상 입력하세요.'
      ],
      checkboxRules: [
        v => !!v || '등록하려면 동의해야 합니다.'
      ],
      checkbox: false
    }
  },
  methods: {
    /*
    submit() {
      if(this.$refs.form.validate() == true) {
        //$refs.form.validate()는 모든 input의 유효성을 검증하고 타당하면 true 반환
        alert('전송 데이터\n\n' + JSON.stringify(this.user));
      }
    },
    */
    handleSubmit() {
      if(this.$refs.myForm.validate() == true) {
        this.$refs.myForm.$el.submit();
          //this.$refs.myForm.submit()은 서버로 form데이터가 전송되지 않음
          //$el을 이용해 뷰인스턴스에 의해 관리되는 DOM엘리먼트에 접근해 데이터 전송
      }
    },
    clear() {
      //this.$refs.form.reset();
        //$refs.form.reset() :: 모든 input에 대한 검증 오류를 제거하고 리셋
      this.$refs.myForm.reset();
    }
  }
}
</script>

<style lang="css" scoped>
  .rounded-card { border-radius: 10px; }
</style>
