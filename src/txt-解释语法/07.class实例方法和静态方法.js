function Person(name, age) {
    this.name = name
    this.age = age
}

//info属性直接挂载给了构造函数，它称之为静态属性
Person.info = "aa"

//实例方法
Person.prototype.say = function(){
    console.log('这是Person的实例方法')
}

//静态方法
Person.show = function(){
    console.log('这是Person的静态方法')
}

var p1 = new Person('wangduod', 18)
console.log(p1)
console.log(Person.info)
p1.say() //这是实例方法
Person.show() //这是静态方法

//--------------------华丽丽的分割线--------------------------

//创建一个动物类
//注意：1. 在class{}里只能写构造器，静态方法和属性，实例方法
//注意：2. class关键字只是在语法上做了优化，内部还是走了构造函数的形式，所以说把我们Class关键字称作 语法糖
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //class内部，通过static修饰的属性就是静态属性
    static info = "abb"  //今后用的不多
    //动物的实例方法,今后会经常用到实例方法
    jiao(){
        console.log('这是Animal的实例方法')
    }
    static jiao() { //今后用的不多
        console.log('这是Animal的静态方法')
    }
}

var a1 = new Animal('大黄', 3)
console.log(a1)
console.log(Animal.info)
a1.jiao() //这是实例方法
Animal.jiao() //这是静态方法