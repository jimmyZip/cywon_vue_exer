new Vue({
  el:'#app',
  methods:{
    showMessage($event){
      //alert($event.target.children[0].innerHTML);
      console.log($event.target.tagName);
      console.log($event.target.firstChild);
      console.log($event.target.children.length);
      //console.log($event.target.children[0].innerHTML);
      //
      //alert($event.target.innerText)
      //($event.target.tagName == 'A') ?  alert($event.target.innerText) :  alert($event.target.children[0].innerText);
      ($event.target.children.length == 2) ?  alert($event.target.children[0].innerText) :  alert($event.target.innerText);
    }
  }
})
