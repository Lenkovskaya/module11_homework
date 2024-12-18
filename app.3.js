/*Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат. */


function takeLeftOperand(left) {
    return function takeRightOperand(right){
        let sum = left + right;
        console.log(sum);
    }
    
}
 const getSum = takeLeftOperand (3)
 getSum(2);