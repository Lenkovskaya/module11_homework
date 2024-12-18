

  function oddEndEven(array){
    let odd = 0;
    let even = 0;
    let zero = 0;
    for( let nums of array){
        if(nums == 0){
            zero += 1
        }
        else if(nums % 2 == 0){
            even += 1;
        }
        else{
            odd += 1;
        }
    }
    console.log(even);
    console.log(odd);
    console.log(zero);
    
  }
  oddEndEven([2,2,2,3,3,0,])


  /*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть,
 что массив может содержать не только числа, но и знаки,
  например null и так далее. */
