const mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({ //Schema 설정
  contactId: {type: Number, require: true},
  name: {type: String, require: true},
  email: {type: String, require: true},
  gender: String,
  phone: String,
  register_date: {type: Date, default:Date.now} //현재 날짜를 저장하기 위한 필드
})

module.exports = mongoose.model('Contact', ContactSchema);
  //'Contact' :: mongoose가 생성할 데이터베이스 콜렉션 이름을 나타냄
  //ContactSchema는 모델을 만들 때 사용할 스키마를 나타냄
