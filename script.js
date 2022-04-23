let numbers = [];

for(let i=0; i<10; i++) {
    numbers.push(Math.round(Math.random()*21-10));
}
document.getElementById('text').innerHTML += numbers;

let minnumb = Math.min(...numbers);
document.getElementById('text_min').innerHTML += 'Минимальное число: ' + minnumb.toString();

let maxnumb = Math.max(...numbers);
document.getElementById('text_max').innerHTML += 'Максимальное число: ' + maxnumb.toString();

let sumnumbers = numbers.map(i=>x+=i, x=0).reverse()[0];
document.getElementById('text_sum').innerHTML += 'Сумма чисел: ' + sumnumbers;

let funnumbers = sumnumbers/numbers.length;
document.getElementById('text_fun').innerHTML += 'Среднее арифметическое чисел: ' + funnumbers;

let multnumbers = numbers.reduce((a,b)=>a*b);
document.getElementById('text_mult').innerHTML += 'Произведение чисел: ' + multnumbers;
