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
  login: function (username, password, callback) {
    AV.User.logIn(username, password).then(function (loginedUser) {
      callback(AV.User.current())
    }, function (error) {
      alert(error)
    })
  },
  currentUser: AV.User.current(),
  getResume: function (callback) {
    if (this.currentUser) {
      var query = new AV.Query('Resume')
      query.find()
        .then(function (resumes) {
          var resume = resumes[0].attributes.resume
          var id = resumes[0].id
          callback(JSON.parse(resume), id)
        }, function (error) {
          alert(error)
        })
    }
  },
  setResume: function (store, currentResume) {
    var setACL = function (avResumes) {
      var acl = new AV.ACL()
      acl.setReadAccess(AV.User.current(), true)
      acl.setWriteAccess(AV.User.current(), true)
      avResumes.setACL(acl)
    }
    var dataString = JSON.stringify(currentResume)

    if (currentResume.id) {
      let avResumes = AV.Object.createWithoutData('Resume', currentResume.id)
      setACL(avResumes)
      avResumes.set('resume', dataString)
      avResumes.save().then(() => {
        alert('更新成功')
      })
    } else {
      var AVResumes = AV.Object.extend('Resume')
      var avResumes = new AVResumes()
      setACL(avResumes)
      avResumes.set('resume', dataString)
      avResumes.save().then((resume) => {
        store.commit('setResumeId', {id: resume.id})
        alert('保存成功')
      }, function (error) {
        alert(error)
      })
    }
  }
}
