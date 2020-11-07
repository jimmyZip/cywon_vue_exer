<template lang="html">
  <div id="app">
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">{{ dialogTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field label="번호" v-model="contactInfo.contactId" required>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="이름" v-model="contactInfo.name" required>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="이메일" v-model="contactInfo.email" required>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="성별" v-model="contactInfo.gender" required>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="전화" v-model="contactInfo.phone" required>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="등록일" v-model="contactInfo.register_date" required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="btnClick($event)">취소</v-btn>
              <v-btn color="blue darken-1" text @click="btnClick($event)">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn color="primary" class="mr-2" v-on:click.native="addContact()">추가</v-btn>
        <v-btn color="primary" class="mr-2" v-on:click.native="updateContact(item)">수정</v-btn>
        <v-btn color="primary" class="mr-2" v-on:click.native="deleteContact(item)">삭제</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      urlinfo:'http://localhost:8000/contacts', //Vue.js 클라이언트를 이용해 RESTful 서비스를 제공하는 서버에 연결할 URL 정의
      contactInfo: {  //RESTful 서버에 전달하거나 받을 데이터 정의
        _id: null,
        contactId: null,
        name: null,
        email: null,
        gender: null,
        phone: null,
        register_date: null
      },
      dialog: false,
      dialogTitle: null,
      headers: [  //Data Table 컴포넌트에 나타낼 헤더 정보 정의
        { text:'번호', align:'right', value:'contactId'},
        { text:'이름', align:'center', value:'name'},
        { text:'이메일', align:'right', value:'email'},
        { text:'성별', align:'center', value:'gender'},
        { text:'전화', align:'center', value:'phone'},
        { text:'등록일', align:'right', value:'register_date'},
        { text:'작업', align:'center', value:'action'}
      ],
      items: []
    }
  },
  created() {
    axios.get(this.urlinfo) //서버에 요청
    .then((res) => {
      console.log(res.data); //성공시
      this.items = res.data;
    }).catch((err) => {
      alert('에러 발생: ' + err); //error 발생
    });
  },
  methods: {
    //
  }
}
</script>

<style lang="css" scoped>
  div {
    margin: 0 5px 0 5px;
  }
</style>
