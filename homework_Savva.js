var count = 0									//Создаем счётчик событий
    sad = function() {							//Создаем функцию 'sad'
        if (++count === 1) {					//Оператор условия if
            return true;						//Возвращаем True 
        }										//Закрытие оператора условия if
        return {								//*не знаю*
            stop: function() {					//Создание метода
                console.log("I AM HAPPY!!!!");	//Вывод в консоли "I AM HAPPY!!!!"
            }									//Закрытие метода
        };										//Закрытие чего то
    },											//Закрытие функции
beAwesome = function() {						//Создаем функцию 'beAwesome'
    console.log("I AM NOW AWESOME!");			//Выводим в консоли "I AM NOW AWESOME!"
};												//закрываем функцию

// Life motto									//Комментарий
if (sad() === true) {							//Оператор условия if 
    sad().stop();								//Вызов метода stop из функции sad
    beAwesome();								//Вызов функции beAwesome
}												//Закрытие оператора условия if