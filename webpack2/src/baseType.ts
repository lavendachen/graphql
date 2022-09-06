(()=>{
    //1). boolean
    let flag:boolean = true
    console.log(flag)

    //2). number
    let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制

//3). string
let str1: string = 'string'
console.log(`${str1} ${a4}`)

//4). undefined and 5). null
let u: undefined = undefined
let n: null = null

//6). Array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
//7). Tuple 元组
let t1: [string, number]
t1 = ['hello', 10] // OK
//t1 = [10, 'hello'] // Error

console.log(t1[0].substring(1)) // OK
//console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法

//8). enum 
enum Color {
    Red,
    Green,
    Blue
  }
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.Green  // 0
  console.log(myColor, Color.Red, Color.Blue)
  
// 从 1 开始编号：
enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green

// 或者，全部都采用手动赋值：
enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：
enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2]
console.log(colorName)  // 'Green'

//9). any 
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean
//  
let list: any[] = [1, true, 'free']
list[1] = 100
//10).  void ----------
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
  }
//   声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：
let unusable: void = undefined
//11). # object
// object 表示非原始类型，也就是除 number，string，boolean之外的类型。
// 使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：

function fn2(obj:object):object {
  console.log('fn2()', obj)
  return {}
  // return undefined
  // return null
}
console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))

// 12).  #
// 联合类型
// 
// 联合类型（Union Types）表示取值可以为多种类型中的一种
// 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
function toString2(x: number | string) : string {
  return x.toString()
}

// 需求2: 定义一个一个函数得到一个数字或字符串值的长度
function getLength(x: number | string) {
  // return x.length // error
//   if (x.length) { // error
    // return x.length
//   } else {
    return x.toString().length
//   }
}
///////////////////////////////////////////////////
/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength2(x: number | string) {
    if ((<string>x).length) {
      return (x as string).length
    } else {
      return x.toString().length
    }
  }
  console.log(getLength2('abcd'), getLength2(1234))
///////////////////////////////////////////////////
// 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
// 有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'
//http s://www.youtube.com/watch?v=5aCqEmVXMBw&list=PLmOn9nNkQxJEfr-CKr9KoHWFoWj_7glnx&index=13
}
)()