var row = 1;
var i = 1;
var stringa = "";
for (; row <= 10; ) {

for (; i <= 10; ) {
	
		stringa += row*i++ + ", ";
}

  console.log(stringa);
  row++;
  i = 1;
  stringa = "";
}