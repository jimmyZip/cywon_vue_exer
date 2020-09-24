/*
  travel.html의 a태그의 data-target, class속성을
  스마트폰 사용을 위한 ul태그의 id, class 속성과 대응시켜 동작하도록
  HTML document 객체의 querySelector() 메서드로
  class속성값이 sidenav인 엘리먼트를 변수로 할당한 후 초기화함
*/
//sidenav
const sideNav = document.querySelector('.sidenav');
//이미지 슬라이드 초기화
const slider = document.querySelector('.slider');
//autocomplete 초기화
const ac = document.querySelector('.autocomplete');
//scrollspy 초기화함
const sp = document.querySelector('.scrollspy');

M.Sidenav.init(sideNav, {});
M.Slider.init(slider,{indicators: true, height: 485, duration: 500, interval: 6000});
//slider 의 indicators는 하단에 나타내지 않을 수 있음(false)
  //슬라이더의 버튼 역할
M.Autocomplete.init(ac,{
  data: {
    "파리": null,
    "베네치아": null,
    "암스테르담": null,
    "부다페스트": null,
    "프랑크푸르트": null,
    "비엔나": null,
    "드레스덴": null,
    "프라하": null,
    "로마": null
  }
});
M.ScrollSpy.init(sp,{});
