var human = {
    name: prompt("What's your name?",""),
    surname: prompt("What's your surname?",""),
    age: prompt("How old are you?",""),
    mgroup: prompt("What's your favourite musical group?",""),
    favbook: prompt("What's your favourite book?","")
};
 
if (human.name==null) {
    human.name = "Jon";
}

if (human.surname==null) {
    human.surname = "Smith";
}



var span_name = document.querySelector('#name');
span_name.innerHTML = human.name;

var span_surname = document.querySelector('#surname');
span_surname.innerHTML = human.surname;

var span_age = document.querySelector('#age');
span_age.innerHTML = human.age;

var span_mgroup = document.querySelector('#mgroup');
span_mgroup.innerHTML = human.mgroup;

var span_favbook = document.querySelector('#favbook');
span_favbook.innerHTML = human.favbook;
