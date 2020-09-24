new Vue({
  el:'#table',
  data: {
    orders: [
      {
        order_num: 'T190324-1',
        item: '아메리카노',
        quantity: 1,
        price: 3000
      },
      {
        order_num: 'T190324-2',
        item: '카푸치노',
        quantity: 2,
        price: 10600
      },
      {
        order_num: 'T190324-3',
        item: '카라멜 마키아또, 아메리카노',
        quantity: 2,
        price: 8900
      },
      {
        order_num: 'T190324-4',
        item: '허니브레드',
        quantity: 1,
        price: 6000
      },
      {
        order_num: 'T190324-5',
        item: '에스프레소, 허니브레드',
        quantity: 2,
        price: 13800
      }
    ]
  }
})
