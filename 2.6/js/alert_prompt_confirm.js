// Взаимодействие: alert, prompt, confirm


// alert
// Функция показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

alert("Hello"); // модальное окно


// prompt
// Функция prompt принимает два аргумента:

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`);


let test = prompt("Test");  // "undefined"

alert(test);

// Чтобы prompt хорошо выглядел в IE, рекомендуется всегда указывать второй параметр:

test = prompt("Test", '');

alert(test);


// confirm
// Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.

// Результат – true, если нажата кнопка OK. В других случаях – false.

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK