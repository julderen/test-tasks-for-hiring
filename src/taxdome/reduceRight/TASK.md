Задача 1
Необходимо реализовать функцию reduceRight. Семантика функции:
На вход подаются два или три параметра:
1) Массив данных
2) Предикат(callback)
3) Начальное значение(необязательно)
   В процессе реализации нельзя использовать методы reduce и reverse

Пример:
```
function reduceRight (arr, callback, initAcc) {
// your code here
}

const arr = [‘a’, ‘b’, ‘c’];
const result = reduceRight(arr, (acc, value) => {
return acc + value;
}, ‘’);

console.log(result); // ‘cba’
