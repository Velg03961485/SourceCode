// https://blog.csdn.net/caicsama/article/details/105086897

// class personal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayName(){
//         console.log('我是' + this.name + '今年：' + this.age)
//     }
//     sayHello(){
//         console.log('今天天气凉爽')
//     }
// }


// // 调用类-   采用 new 实例化
// let p = new personal('张三',12)
// console.log(p)


// console.log(Object.getOwnPropertyDescriptors(p));
// console.log('---------------------------------');
// console.log(Object.getOwnPropertyDescriptors(p.__proto__));

/***
 * Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
 * 所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象
 * *****/ 



//  console.log(p.hasOwnProperty('name'));//true
//  //未显示(this)指明的话，属性定义在原型对象上
//  console.log(p.hasOwnProperty('sayName'));//false

/****
 * hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * ****/  




/****
 * 
 * 类上的相关属性：

Class的相关属性	描述
this	指向当前的调用的类的实例化对象
name	当前的类的名字
getter、setter	取值、存值函数
new.target	new命令所用的构造函数 ,返回当前class
 * ****/ 

// class setPersonal {
//     constructor(){}
//     get name(){
//         return name;
//     }
//     set name(value){
//         name = value;
//         console.log('设置成功')
//     }
// }

// let q = new setPersonal();
// q.name = '张三';
// console.log(q.name)

// 'get' in Object.getOwnPropertyDescriptor(p,'name');//true
// 'set' in Object.getOwnPropertyDescriptor(p,'name');//true




// class Person{
// 	constructor(target){
// 		this.target=new.target;
// 	}
// }
// class Student extends Person {
//     constructor(target) {
//         super(target);
//     }
//     sayGrade() {
//     //打印出当前的目标类
//     	console.log(this.target);
//     }

// }
// let s=new Student();
// s.sayGrade();//[Function:Student]



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.target=new.target;
//         console.log(this.address);
//     }
//     // let address='你想去的地方';
//     //静态方法
//     static sayName(){
//     	console.log('我是静态方法');
//     }
//     sayAge(){
//     	console.log(`my age is ${this.age}`);
//     }
//  }
// let p = new Person('张三', 15);

// //调用静态方法
// Person.sayName();//我是静态方法


/****
 * 
 * 类的静态方法
声明：static
特点：

不会被实例对象继承，直接通过类调用；
可以被子类继承，子类可以直接调用
 * *****/ 





// class Person{
// 	constructor(name,age){
// 		this.name=name;
// 		this.age=age;
// 	}
// 	static sayName(){
// 		console.log('我是静态方法');
// 	}
// 	sayAge(){
// 		console.log(`我的年龄是${this.age}`);
// 	}
// }
// class Student extends Person{
// 	constructor(name,age){
// 	//子类在super之前使用this,此时子类还没有this
// 		//this.grade=grade;//出错
// 		super(name,age);
// 		//相当于 Person.prototype.constructor.call(this)
// 	}
// 	static sayStudentAge(){
// 		super.sayAge();
// 	}
// 	sayStudentName(){
// 		super.sayName();
// 	}
// }
// let s=new Student('张三',15);
// s.sayStudentName();
// s.sayStudentAge();





// var animal={
//     name:"zengyu",
//     eat:function(){
//         console.log( `${this.name} is eatting`);
//     }
// }
// var cat ={
//     name:"cat",
//     __proto__:animal
// }
// var dog={
//     name:"dog",
//     __proto__:animal
// }
// animal.eat();
// cat.eat();
// dog.eat();





/********* 👇
 * 
 * class 类名{
  属性;
  方法;
  // 构造方法,实例化类的时候,自动调用
  constructor(){

  }
}
***/ 

// class A {
//     name = 'zs';
//     age = 18;
//     say() {
//       console.log('一和你聊天,我就成了别人眼中的傻子!');
//     }
//   }
//   // 类要实例化,才能调用普通方法
//   let a = new A;
//   //  console.log(a);
//   a.say(); // 一和你聊天,我就成了别人眼中的傻子!
//   console.log(a.name); //zs



//     // 构造方法的使用
//     class B {
//         name = 'ls';
  
//         // new的时候自动调用
//         constructor() {
//           console.log(this.name);
  
//         }
//       }
  
//       new B;



//       // 给对象中属性赋值
//     // 类中的this指向实例化之后的对象
//     class C {
//         constructor(name, age) {
//           this.name = name;
//           this.age = age;
//           // 在构造方法中,直接调用其他方法
//           this.say();
//         }
//         say() {
//           console.log(this);
//           console.log(this.name);
//         }
//       }
  
//      let c = new C('zs', 18);
//       c.say();




class A {
    name = '他爸';
    say() {
    //   console.log(this.name + '说:我给你换个妈!');

    }
  }

  // B类继承了A类
  class B extends A {
    age = 18;
  }

   var b = new B;
   console.log(b.name);
   b.say()

  class C {
    name = 'zs';
    age = 18;
    constructor(age) {
      this.age = age

      console.log(age);

    }
  }

  class D extends C {
    constructor(info, age) {
      // 当子类,父类都有构造方法,需要使用super,调用父类的构造方法
      super(age);
      this.info = info;
      console.log(this.info);

    }
  }

  new D('嘿嘿', 22);




  /*
      静态关键字  static
      被static修饰的方法和属性,只属于类本身
      只能使用类名进行调用
    
    */

      class Goods {
        static name = '小姐姐';
        age = 18;
        constructor() {
          // 静态属性和方法的调用,只能用类名,不能使用this
          // console.log(Goods.name);
          //Goods.info();
  
          // 静态方法
          // Goods.demo.bind(this)();
          // call() 改变this指向,直接调用
          Goods.demo.call(this)
        }
        say() {
          console.log('小姐姐,你知道我为什么单身吗?');
        }
  
        // 静态方法中,this指向当前的类
  
        static info() {
          console.log('因为还没有向你告白!');
          console.log(this);
        }
  
        static demo() {
          console.log(this.age);
        }
      }
  
      let g = new Goods;
      // g.say();
      // g.info();
      // Goods.info();