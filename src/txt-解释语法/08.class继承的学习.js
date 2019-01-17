//这是父类，理解成原型对象
class People{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

//在clss类中，可以使用extends关键字，实现子类继承父类
//语法：class 子类extends父类{}
//美国人
class American extends People{
}

const a1 = new American('jack',30)
console.log(a1)

//中国人
class Chinese extends People{
    
}

const a2 = new Chinese('张三',31)
console.log(a2)