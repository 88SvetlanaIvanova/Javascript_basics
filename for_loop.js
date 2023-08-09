document.getElementById("button").onclick = function(){
  document.getElementById("confirm").innerHTML="Order placed. Check email for confirmation";
  document.getElementById("button").style.display = "none";
}
let d = document.getElementById("destination");

for (let i = 0; i < 10; i++) {
  for (let k = i; k >= 0; k--) {
    d.append(k +" ");
  }
  var br = document.createElement('br');
  d.appendChild(br);
}
