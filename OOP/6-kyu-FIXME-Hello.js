/**
 * FIXME: Hello
 * https://www.codewars.com/kata/5b0a80ce84a30f4762000069/train/javascript
 *
 */

class Dinglemouse {
  constructor() {
    this.name = ''
    this.age = this.sex = 0
    this.greetingQueue = new Set()
  }

  setAge(age) {
    this.age = age
    this.greetingQueue.add('age')
    return this
  }

  setSex(sex) {
    this.sex = sex
    this.greetingQueue.add('sex')
    return this
  }

  setName(name) {
    this.name = name
    this.greetingQueue.add('name')
    return this
  }

  hello() {
    const greeting = ['Hello.']

    for (const key of this.greetingQueue) {
      if (key === 'name') greeting.push(`My name is ${this.name}.`)
      if (key === 'age') greeting.push(`I am ${this.age}.`)
      if (key === 'sex')
        greeting.push(`I am ${this.sex === 'M' ? 'male' : 'female'}.`)
    }

    return greeting.join(' ')
  }
}
