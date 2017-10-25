import Vue from 'vue';
import AV from 'leancloud-storage';

AV.init({
  appId: 'i8UMndQ06qVVICpGxv4kEFgL-gzGzoHsz',
  appKey: 'behHzbmdtnHQGL98jSxg1LIk'
});
var app = new Vue({
  created : function(){
    var self = this;
    window.onbeforeunload = function(){
      window.localStorage.setItem('todos', JSON.stringify(self.todoList));
    }
  },
  el: '#app',
  data: {
    newTodo: '',
    todoList :  window.localStorage.getItem('todos')?JSON.parse(window.localStorage.getItem('todos')):[]
  },
  methods: {
    addList : function(){
      this.todoList.push({
        title : this.newTodo,
        time : new Date(),
        done :false
      });
      this.newTodo = '';
      // console.log(this);
    },
    removeTodo : function(todo){
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    }
  }
})
