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
