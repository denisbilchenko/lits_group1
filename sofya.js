var human = {
    name: prompt("what your name?", ""),
    surname: prompt("what your surname?", ""),
    age: prompt("what your age?", ""),
    band: prompt("what your favorite band?", ""),
    book: prompt("what your favorite book?", ""),               
                  
};

if (human.name == null){
    human.name = "Jordan";
}

if (human.surname == null){
    human.surname = "Osiptova";
}

if (human.age == null){
    human.age = "12";
}


var span_name = document.querySelector('#name');
span_name.innerHTML = human.name;

var span_surname = document.querySelector('#surname');
span_surname.innerHTML = human.surname;

var span_age = document.querySelector('#age');
span_age.innerHTML = human.age;

var span_band = document.querySelector('#band');
span_band.innerHTML = human.band;

var span_book = document.querySelector('#book');
span_book.innerHTML = human.book;