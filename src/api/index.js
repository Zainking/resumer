import AV from 'leancloud-storage'

AV.init({
  appId: 'i8UMndQ06qVVICpGxv4kEFgL-gzGzoHsz',
  appKey: 'behHzbmdtnHQGL98jSxg1LIk'
})

export default {
  register: function (username, password, callback) {
    // 新建 AVUser 对象实例
    var user = new AV.User()
    // 设置用户名
    user.setUsername(username)
    // 设置密码
    user.setPassword(password)
    user.signUp().then(function (loginedUser) {
      callback()
    }, function (error) {
      alert(error)
      return false
    })
  },
  login: function (username, password) {
    AV.User.logIn(username, password).then(function (loginedUser) {
      return AV.User.current()
    }, function (error) {
      alert(error)
      return false
    })
  },
  logout: function () {
    AV.User.logOut()
    return true
  },
  currentUser: () => AV.User.current()
}
