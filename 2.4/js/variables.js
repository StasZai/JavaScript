// ПЕРЕМЕННЫЕ

let message = 'Hello'; // определяем переменную и присваиваем ей значение

alert(message); // показывает содержимое переменной

// Мы также можем объявить несколько переменных

let user = 'John';
let age = 25;

alert(user);
alert(age);

// В старых скриптах вы также можете найти другое ключевое слово: var вместо let:

var v_message = 'Hello';

// Мы можем объявить две переменные и скопировать данные из одной в другую.

let hello = 'Hello world!';

let h_message;

// копируем значение 'Hello world' из переменной hello в переменную message
h_message = hello;

// теперь две переменные содержат одинаковые данные
alert(hello);
alert(h_message);


// Переменная может быть объявлена только один раз!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ИМЕНА ПЕРЕМЕННЫХ

// В JavaScript есть два ограничения, касающиеся имён переменных:

// 1. Имя переменной должно содержать только буквы, цифры или символы $ и _.
// 2. Первый символ не должен быть цифрой.

// Примеры допустимых имён:

let userName;
let test123;

// Эти имена являются допустимыми:

let $ = 1; // объявили переменную с именем "$"
let _ = 2; // а теперь переменную с именем "_"

alert($ + _); // 3

// Регистр имеет значение!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!