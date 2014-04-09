//this is a comment
/*
var firstname = prompt('What is your name?');
var lastname = prompt('What is your last name');
var fullname = firstname + '' + lastname;

console.log(fullname);

var age = prompt('What is your age? ');
age = parseInt(age);


if(age > 20){
	console.log('You can drink alcohol....legally! ;)');
} else {
	console.log('you are to young to drink!');
}

if(age >=0 && age < 6){        //between 0 and 5
	console.log('Movie: G');
} 
else if(age>=6 && < 13){
	console.log('Movie: PG');
}
else if(age<=13 && >=18){
	console.log('Movie: PG-13');
}
else {
	console.log('Movie: R');
}


var color = prompt('What is your fav color?');

switch(color){
	case 'blue':
	console.log('blue is awesome');
	break;
	case 'red':
	console.log('red is is cool');
	break;
	case 'green':
	console.log('green is sublime');
	break;
	default:
	console.log('I dont\' like that color)
}


var number = prompt('Enter a number');
number = number * 1;
if(number > 0 && number < 10){
	while(number < 50){
		console.log('number : ' + number);
		number +=2;
	}
}

for(var i = 0; i < 50; i++){
	console.log('I :' +i);
}


var colors = [];

var response = prompt('Enter a color or (q)uit');
response = response.toLowerCase();
while(response != 'q' ){
	colors.push(response);
	console.log(colors)
	response = prompt('Enter a color or (q)uit');
	response = response.toLowerCase();
}



var evens = [], 
	odds = [];

	for(var i  = 0; i <100; i++){
		var remainder = i % 2;

		if(remainder ===0){   //else even
			var square = i * i;
			evens.push(square);
		} 
		else {
			var cube = Math.pow(i, 3);
			odds.push(cube);
		}
	}

console.log(evens);
console.log(odds);


*/
function square(x){
	return x * x;
}

function cube(x){
	return Math.pow(x, 3);
}

function isOdd(x){
	return x % 2;
	}

function area(l, w){
	return l * w;
}

function vol(l, w, h){
	return l * w * h;
}

 
var z = square(3) + cube(9) - area(3, 4) * vol(5, 6, 7);
console.log(z)


//Fun
//debugger;    //freezes program allows to inspect.
