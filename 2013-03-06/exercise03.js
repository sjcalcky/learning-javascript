var row = 1;
var position = 1;
var stringa = "";

for (; row <= 10; ) {

	for(; position <= 10; ) {
		if(position === row)
			stringa += "1, ";
		else
			stringa += "0, ";
		position++;
	}

  console.log(stringa);
  row++;
  position = 1;
  stringa = "";
}