function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var H = Array.apply(null, new Array(5*3)).map(Number.prototype.valueOf,0);
var I = Array.apply(null, new Array(5*2)).map(Number.prototype.valueOf,1);
var V = Array.apply(null, new Array(5)).map(Number.prototype.valueOf,2);

var HI = H.concat(I);
var HIV = HI.concat(V);

var perm_HIV = shuffle(HIV);


var counter = 0;
while (counter < perm_HIV.length/2){
	counter = 0;
for (i=1; i< perm_HIV.length-1; i++){
	if (perm_HIV[i] - perm_HIV[i+1] != 0){
		counter++;
	}
}
}
console.log(perm_HIV);
console.log(counter);


