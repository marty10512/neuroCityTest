class Junior {
  constructor () {
    this.position = 'Junior'
  }
}
class Middle {
  constructor () {
    this.position = 'Middle'
  }
}
class Senior {
  constructor () {
    this.position = 'Senior'
  }
}

class User {
  create (exp) {
    let user
    if (exp === 'junior') {
      user = new Junior()
    } else if (exp === 'middle') {
      user = new Middle()
    } else if (exp === 'senior') {
      user = new Senior()
    }
    user.exp = exp;
    user.log = ()=> {
      console.log( user.exp + ' pretends on ' + user.position + ' position')
    }
    return user
  }
}

const factory = new User()
junior = factory.create('junior')
middle = factory.create('middle')
senior = factory.create('senior')

junior.log()
middle.log()
senior.log()