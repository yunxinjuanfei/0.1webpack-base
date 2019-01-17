//这是父类，理解成原型对象
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log('大家好')
    }
}

//在clss类中，可以使用extends关键字，实现子类继承父类
//语法：class 子类extends父类{}
//美国人
class American extends People { 
    constructor(name, age){
        //为什么要在constructor调用super()?
        //答：因为如果一个子类，通过extends关键字继承了父类，那么在子类的constructor先调用super()
        //super()?
        //答：super()是一个函数，而且它是父类的构造器，子类的super其实就是父类constructor构造器的一个引用
        //为什么调用了super(),al实例name和age变成了undefined了?
        //答：默认没传
        super(name, age)
    }
}

const a1 = new American('jack', 30)
console.log(a1)
a1.sayHello()

//中国人
class Chinese extends People {
    constructor(name, age) {
        super(name, age)
    }
}

const a2 = new Chinese('张三', 31)
console.log(a2)
a2.sayHello()