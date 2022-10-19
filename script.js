'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }


function buttonClick1() {
    let elem = document.getElementById('elem1');
    elem.innerHTML = 'Ку-ку! А я <strong>жирный</strong>!';
}

function buttonClick2() {
    let elem = document.getElementById('elem2');
    elem.innerHTML = '<h3>Абзац превратился в h3!</h3>';
}

function buttonClick3() {
    let elem = document.getElementById('elem3');
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}

function buttonClick4() {
    let input1 = document.forms[0].elements[0].value;
    let input2 = document.forms[0].elements[1].value;
    let elem = document.getElementById('elem4');
    let addition = Number(input1) + Number(input2);
    elem.innerHTML = addition;
}

function buttonClick5() {
    let elems = document.querySelectorAll('p.elem5');
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = i;
    }
}