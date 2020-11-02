//router.js에서 REST요청시 언급한 메서드 정의
const Contact = require('./contact.model.js');

//router.js에서 post 메서드 발생 시 호출되는 create() 정의
exports.create = (req, res) => {
  // 새로운 연락처 만들기 요청 처리
  const contact = new Contact({
    contactId : req.body.contactId,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone
  });

  // 데이터베이스에 새로운 연락처 저장
  contact.save()
  .then(data => { res.send(data); })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

//router.js에서 get 메서드 발생 중 기존 연락처를 모두 검색하는 findAll() 정의
  //mongoose API에서 제공하는 find() 메서드 이용
exports.findAll = (req, res) => {
  Contact.find()
  .then( contacts => { res.send(contacts); })
  .catch( err => {
    res.status(500).send({ message: err.message });
  });
};

//특정 연락처만 검색, findOne()정의
  //MongoDB에 도큐먼트 추가 시 자동적으로 생성되는 _id값을 이용 시 :: findById() 이용
exports.findOne = (req, res) => {
  Contact.findOne({ contactId : req.params.contactId })
  .then( contact => {
    if (!contact) {
      return res.status(404).send({
        message: req.params.contactId + "에 해당하는 연락처가 없습니다."
      });
    }
    res.send(contact);
  }).catch( err => {
    return res.status(500).send({
      message: req.params.contactId + "로 검색 중 에러 발생"
    });
  });
};

//기존 연락처 중 contactId로 특정 연락처 업데이트
  //findOneAndUpdate() 메서드 이용
  //_id값 이용 시 findByIdAndUpdate() 메서드 이용
exports.update = (req, res) => {
  Contact.findOneAndUpdate(
    { contactId: req.params.contactId },
    {
      contactId: req.body.contactId,
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phone: req.body.phone
    },
    { new: true }
  )
  .then( contact => {
    if (!contact) {
      return res.status(404).send(
        {
          message: req.params.contactId + "에 해당하는 연락처(contact)가 발견되지 않았습니다."
        }
      )
    }
    res.send(contact);
  }).catch( err => {
    return res.status(500).send({ message: err.message });
  });
};

//delete
exports.delete = (req, res) => {
  Contacts.findOneAndDelete({ contactId: req.params.contactId })
  .then( contact => {
    if (!contact) {
      return res.status(404).send({
        message: req.params.contactId + "에 해당하는 연락처(contact)가 없습니다."
      })
    }
    res.send({ message: "정상적으로 " + req.params.contactId + " 연락처가 삭제되었습니다."})
  }).catch( err => {
    return res.status(500).send({ message: err.message });
  });
};
