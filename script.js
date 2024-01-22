var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

var parentDiv = document.createElement("div");
parentDiv.innerHTML = `<h4>Please enter the number of quotes u wanna know about the famous series Breaking Bad<br></h4>`;
parentDiv.className = "main";

var num_inp = document.createElement("input");
num_inp.setAttribute("type", "number");
num_inp.id = "num";

var button = document.createElement("button");
button.innerHTML = "click me";
button.className = "btn btn-primary";
button.addEventListener("click", displayQuotes);

parentDiv.append(num_inp, button);
document.body.append(parentDiv);

async function displayQuotes() {
  var input = document.getElementById("num").value;
  var res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${input}`);
  var res_1 = await res.json();
  console.log(res_1.length);
  console.log(input);
  for (var i = 0; i < res_1.length; i++) {
    console.log(res_1[i].quote);
    var col = document.createElement("div");
    col.className = "col-sm-4 displaydiv";
    col.innerHTML += `
    <div class="card text-black bg-grey mb-3" style="max-width: 18rem;">
  <div class="card-header">${res_1[i].author}'s Quote</div>
  <div class="card-body">
  <h6 class="card-title">Quote: ${res_1[i].quote}</h6>
  <h6 class="card-title">Author: ${res_1[i].author}</h6>
   </div>
</div>
    `;
    parentDiv.append(row);
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
  //foo(res_1);
}
