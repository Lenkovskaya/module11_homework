function isPrime(num) {
    if( num > 1000){
        console.log('Данные не верны')
        return;
    } if (num < 2) { 
        console.log(false);
        return;
     }  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log(false)
        return;
      }
    }
       console.log(true)
     }
  

  isPrime(4);

/* Напишите функцию, которая принимает на входе любое число 
(но не больше 1 000), определяет, является ли оно простым, и выводит,
 простое число или нет. Если введено больше 1 000,
  то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

