import Vue from 'vue';
import AV from 'leancloud-storage';

AV.init({
  appId: 'i8UMndQ06qVVICpGxv4kEFgL-gzGzoHsz',
  appKey: 'behHzbmdtnHQGL98jSxg1LIk'
});

var app = new Vue({
  created : function(){
    var self = this;
    this.loadList();
  },
  el: '#app',
  data: {
    newTodo: '',
    todoList :  [],
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
    loadList : function(){
      if(this.currentUser){
      var query = new AV.Query('AllTodos');
        query.find()
          .then((todos) => {
            let avAllTodos = todos[0] // 因为理论上 AllTodos 只有一个，所以我们取结果的第一项
            let id = avAllTodos.id
          this.todoList = JSON.parse(avAllTodos.attributes.content) // 为什么有个 attributes？因为我从控制台看到的
          this.todoList.id = id // 为什么给 todoList 这个数组设置 id？因为数组也是对象啊
          }, function(error){
            console.error(error)
         })
       }
    },
    saveTodos: function(){
      let dataString = JSON.stringify(this.todoList);

      if(this.todoList.id){
        let dataString = JSON.stringify(this.todoList);
        let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id);
        var acl = new AV.ACL();
        acl.setReadAccess(AV.User.current(),true);
        acl.setWriteAccess(AV.User.current(),true);
        avTodos.setACL(acl);
        avTodos.set('content', dataString);
        avTodos.save().then(()=>{
          console.log('更新成功');
        });
      }else{
        let dataString = JSON.stringify(this.todoList);
        var AVTodos = AV.Object.extend('AllTodos');
        var avTodos = new AVTodos();
        var acl = new AV.ACL();
        acl.setReadAccess(AV.User.current(),true);
        acl.setWriteAccess(AV.User.current(),true);
        avTodos.setACL(acl);
        avTodos.set('content', dataString);
        avTodos.save().then((todo) =>{
          this.todoList.id = todo.id;
          console.log('保存成功');
        }, function (error) {
          alert('保存失败');
        });
       }
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
        this.loadList();
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
