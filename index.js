var readLineSync = require('readline-sync');

var n = readLineSync.question('Input number of stages(n) layers: ');

if(!isNaN(n)){
  var string = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

}else{
  console.log('Enter valid number')
}
