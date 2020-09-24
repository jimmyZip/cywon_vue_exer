new Vue({
  el: '#travel',
  data: {
    navlinks: [
      {
        text: '홈',
        href: '#home'
      },
      {
        text: '검색',
        href: '#search'
      },
      {
        text: '관광명소',
        href: '#attraction'
      },
      {
        text: '문의',
        href: '#contact'
      }
    ],
    slides: [
      {
        imgsrc: '../images/amsterdam.jpg',
        title: '풍차의 나라 Netherlands',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorum tenetur, quidem doloremque alias veritatis, voluptatibus cumque iste aspernatur rem?'
      },
      {
        imgsrc: '../images/dresden.jpg',
        title: '다시 가고싶은 도시 Dresden',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorum tenetur, quidem doloremque alias veritatis, voluptatibus cumque iste aspernatur rem?'
      },
      {
        imgsrc: '../images/venezia.jpg',
        title: '세계적인 수상도시 Venezia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorum tenetur, quidem doloremque alias veritatis, voluptatibus cumque iste aspernatur rem?'
      }
    ],
    attractions: [
      {imgsrc:'../images/amsterdam.jpg', title:'암스테르담(Amsterdam)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/dresden.jpg', title:'드레스덴(Dresden)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/venezia.jpg', title:'베네치아(Venezia)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/budapest.jpg', title:'부다페스트(Budapest)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/frankfurt.jpg', title:'프랑크푸르트(Frankfurt)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/paris.jpg', title:'파리(Paris)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/praque.jpg', title:'프라하(Praha)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/rome.jpg', title:'로마(Rome)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
     {imgsrc:'../images/interlaken.jpg', title:'인터라켄(Interlaken)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
   ]
  }
})
