//1a
function add_n_naturals (n) {
var a = [];
	for (var i = 0; i<= n; i++) {
		a.push(i);}
return a;
}

//1b
function is_odd(array) {
	var array_odd = [];
	for(k = 0; k<array.length; k++) {
		if(k % 2 !== 0)
		array_odd.push(k);
	}
	
return array_odd;
}

//1c
function double(array) {
	var mapResult = array.map(function (item, index, array) {
		return item*2;
	} 

	);
}


//1d

function is_divisible_four (array) {

var arr_div_four =[];
	for(j=0; j<array.length;j++) {
	if(j % 4 === 0)
	arr_div_four.push(j);
}
return arr_div_four;
}

//1e

function sum_all (array) {
var sum = 0;
for(h=0; h<array.length; h++) {
sum += h;
}
return sum;
}
