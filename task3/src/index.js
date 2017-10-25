import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
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
    }
  }
})
