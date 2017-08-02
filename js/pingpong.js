// back-end; like our src files (model/Class declaration, etc.)

function Calculator(skinName) {
    this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

// like a class declaration file
// exports is a giant, global JS object
// calculatorModule is a new property of exports
// setting exports.calculatorModule equal to our Calculator constructor (object class)
// prototype method gets dragged along with constructor function
exports.calculatorModule = Calculator;
