function Person(name, age){
    this.name = name
    this.age = age
}

//info属性直接挂载给了构造函数，它称之为静态属性
Person.info = "aa"

var p1 = new Person('wangduod',18)
console.log(p1)
//通过new出来的实例，访问到的属性，称之为【实例属性】
 console.log(p1.name)
 console.log(p1.age)
//通过构造函数直接访问到的属性，叫做【静态属性】
console.log(Person.info)

//--------------------华丽丽的分割线--------------------------

//创建一个动物类
class Animal{
    //构造器
    //每一个类中都有一个构造器，如果我们程序员没有手动指定构造器，那么可以认为类的内部有一个隐形的，看不见的空构造器，类似于这样constructor(){}
    //构造器的作用就是，每当new这个类的时候，必然会优先执行构造器中的代码
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //class内部，通过static修饰的属性就是静态属性
    static info = "abb"
}

var a1 = new Animal('大黄',3)
console.log(a1)

console.log(Animal.info)