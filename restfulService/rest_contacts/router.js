//라우팅
//app.js(index.js역할)에 모두 작성할 수 있지만
//router.js 파일을 만들고 필요 기능을 작성한 후 app.js에 적용
module.exports = (app) => {
  const contacts = require('./contact.controller.js');  //contact.controller.js를 로딩
  app.get('/contacts', contacts.findAll);               //모든 연락처 검색
  app.get('/contacts/:contactId', contacts.findOne);    //특정 연락처 검색
  app.post('/contacts', contacts.create);               //새로운 연락처 추가
  app.put('/contacts/:contactId', contacts.update);      //특정 연락처 업데이트
  app.delete('/contacts/:contactId', contacts.delete);   //특정 연락처 삭제
}
