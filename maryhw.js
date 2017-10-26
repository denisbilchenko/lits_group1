function myFunction() {  //создаем функцию
    var x = "", i;      . //создаем локальную переменную х , которая имеет в себе два значения
    for (i=0; i<5; i++) {  //создаем цикл последовательностей числ от 0 до 4 (01234)
        x = x + "The number is " + i + "<br>"; //объединяем все в x
    }
    document.getElementById("demo").innerHTML = x; //выводим x
}