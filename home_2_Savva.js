function factorial(number){
	var result = 1
	for(i = 1; i < number + 1; i++){
		result *= i
	}
	return(result)
}

var answer = factorial(5)
alert(answer)