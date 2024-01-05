// var count = 1;
// function addFields() {
//   count++;
//   var inputFields = document.getElementById("inputFields");
//   var newFields = document.createElement("div");
//   newFields.innerHTML =
//     "" +
//     '<div class="d-flex justify-content-between mx-3 py-3"><input class="p-3 border border-5 border-warning text-bg-success text-white text-center fs-5" type="text" name="input2" placeholder="Product"/>' 
//     +
//     '<input class="p-3 border border-5 border-warning text-bg-danger text-white text-center fs-4 me-1" type="number" name="input3" placeholder="Price"/>' 
//     +
//     '<button class="px-5 btn btn-danger" onclick="addFields()">Add</button></div>';
//   inputFields.appendChild(newFields);
// }

// function calculateSum() {
//   var inputs = document.getElementsByName("input3");
//   var sum = 0;
//   for (var i = 0; i < inputs.length; i++) {
//     sum += Number(inputs[i].value);
//   }
//   document.getElementById("result").innerHTML =
//     "Total Cost: " + sum;
//   document.getElementById("result").style.display = "block";
// }

// function parthokko() {
//   var newInputValue = Number(document.getElementsByName("newInput")[0].value);
//   var inputs = document.getElementsByName("input3");
//   var sum = 0;
//   for (var i = 0; i < inputs.length; i++) {
//     sum += Number(inputs[i].value);
//   }
//   var parthokko = newInputValue - sum;
//   document.getElementById("result").innerHTML += "<br>The Difference: " + parthokko;
//   document.getElementById("result").style.display = "block";
// }




var count = 1;
function addFields() {
  count++;
  var inputFields = document.getElementById("inputFields");
  var newFields = document.createElement("div");
  newFields.innerHTML =
    "" +
    '<div class="d-flex justify-content-between mx-3 py-3"><input class="p-3 border border-5 border-warning text-bg-success text-white text-center fs-5" type="text" name="input2" placeholder="Product"/>' 
    +
    '<input class="p-3 border border-5 border-warning text-bg-danger text-white text-center fs-4 me-1" type="number" name="input3" placeholder="Price"/>' 
    +
    '<button class="px-5 btn btn-danger" onclick="addFields()">Add</button></div>';
  inputFields.appendChild(newFields);
}

function calculateSum() {
  var inputs = document.getElementsByName("input3");
  var sum = 0;
  for (var i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i].value);
  }
  document.getElementById("result").innerHTML =
    "Total Cost : " + sum;
  document.getElementById("result").style.display = "block";
}

function parthokko() {
  var newInputValue = Number(document.getElementsByName("newInput")[0].value);
  var inputs = document.getElementsByName("input3");
  var sum = 0;
  for (var i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i].value);
  }
  var parthokko = newInputValue - sum;
  document.getElementById("result").innerHTML += "<br>The Difference : " + parthokko;
  document.getElementById("result").style.display = "block";
}

