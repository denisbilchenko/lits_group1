var human = {
    name: prompt("Whats your name?",""),
    surname: prompt("Whats your surname?",""),
    age: prompt("How old are you?",""),
    band: prompt("Whats your favorite band?",""),
    book: prompt("What your favorite book?",""),
}

if (human.name == null){
    human.name = "Jon"
}
if (human.surname == null){
    human.surname = "Smit"
}

if (human.age == null){
    human.age = "43"

}
if (human.band == null){
    human.band = "Mozgi"
}

if (human.book == null){
    human.book = "Angels"
}

var span_name = document.querySelector('#name')
span_name.innerHTML = human.name;
var span_surname = document.querySelector('#surname')
span_surname.innerHTML = human.surname;
var span_age = document.querySelector('#age')
span_age.innerHTML = human.age;
var span_band = document.querySelector('#band')
span_band.innerHTML = human.band;
var span_book = document.querySelector('#book')
span_book.innerHTML = human.book;