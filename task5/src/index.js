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
    var query = new AV.Query('AllTodos');
    query.find().then(function (todos) {
      todos.map(function(todo) {
        todo['status'] = 1;
      });
      return AV.Object.saveAll(todos);
    }).then(function(todos) {
      console.log(todos);
    }, function (error) {
      // 异常处理
    });
  },
  el: '#app',
  data: {
    newTodo: '',
    todoList :  window.localStorage.getItem('todos')?JSON.parse(window.localStorage.getItem('todos')):[],
    actionType : 'login',
    reginfo : {
      username : '',
      password : ''
    },
    userinfo : {
      username : '',
      password : ''
    },
    currentUser : AV.User.current()
  },
  methods: {
    saveTodos: function(){
       let dataString = JSON.stringify(this.todoList)
       var AVTodos = AV.Object.extend('AllTodos');
       var avTodos = new AVTodos();

       var acl = new AV.ACL()
       acl.setReadAccess(AV.User.current(),true);// 只有这个 user 能读
       acl.setWriteAccess(AV.User.current(),true);// 只有这个 user 能写
       avTodos.set('content', dataString);
       avTodos.setACL(acl);
       avTodos.save().then(function (todo) {
       }, function (error) {
         alert('保存失败');
       });
     },
    addList : function(){
      this.todoList.push({
        title : this.newTodo,
        time : new Date(),
        done :false
      });
      this.newTodo = '';
      // console.log(this);
      this.saveTodos();
    },
    removeTodo : function(todo){
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
      this.saveTodos();
    },
    register : function(){
      // 新建 AVUser 对象实例
      var user = new AV.User();
      var self = this;
      // 设置用户名
      user.setUsername(self.reginfo.username);
      // 设置密码
      user.setPassword(self.reginfo.password);
      user.signUp().then(function (loginedUser) {
        alert('注册成功！');
        self.actionType = 'login';
      }, function (error) {
        alert('注册失败！');
      });
    },
    login : function(){
      var self = this;
      AV.User.logIn(self.userinfo.username, self.userinfo.password).then(function (loginedUser) {
        alert('登陆成功！');
        self.currentUser = AV.User.current();
      }, function (error) {
        alert('登陆失败！')
      });
    },
    loginout : function(){
      AV.User.logOut();
      this.currentUser = AV.User.current();
      alert('已经登出！');
    }
  }
})
