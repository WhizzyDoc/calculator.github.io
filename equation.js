var aa = document.getElementById("aa");
var bb = document.getElementById("bb");
var cc = document.getElementById("cc");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");

var solve1 = document.getElementById("solve1");
solve1.onclick=function() {
  let step1 = Number(Number(bb.value)**2) - Number(4 * Number(aa.value) * Number(cc.value));
  
  let step2 = Number(Math.sqrt(step1));
  
  let step3 = Number(-1 * Number(bb.value));
  
  let step4 = step3 + step2;
  
  let step5 = step3 - step2;
  
  let step6 = Number(2 * Number(aa.value));
  
  let step7 = step4 / step6;
  let step8 = step5 / step6;
  
  q1.value = step7;
  q2.value = step8;
}



var simul = document.getElementById("simul");
var simul2 = document.getElementById("simul2");
var simul3 = document.getElementById("simul3");
var x1 = document.getElementById("x1");
var x2 = document.getElementById("x2");
var y1 = document.getElementById("y1");
var y2 = document.getElementById("y2");
var z1 = document.getElementById("z1");
var z2 = document.getElementById("z2");


var select1 = document.getElementById("select1");
select1.onclick = function() {
  if(simul.value=="2") {
    simul2.style.display = "block";
    simul3.style.display = "none";
  }
  else if(simul.value=="3") {
    simul2.style.display = "none";
    simul3.style.display = "block";
  }
}

var solve2 = document.getElementById("solve2");
solve2.onclick = function() {
  if(simul.value=="2") {
    let num1 = z2.value * y1.value;
    let num2 = z1.value * y2.value;
    let num3 = x2.value * z1.value;
    let num4 = x1.value * z2.value;
    let numx = Number(num1) - Number(num2);
    let numy = Number(num3) - Number(num4);
    
    let den1 = x2.value * y1.value;
    let den2 = x1.value * y2.value;
    let den = Number(den1) - Number(den2);
    let x2a = Number(numx) / Number(den);
    let y2b = Number(numy) / Number(den);
    let X2A = Number(x2a).toFixed(2);
    let Y2B = Number(y2b).toFixed(2);
    document.getElementById("a2a").value = X2A;
    document.getElementById("b2b").value = Y2B;
  }
  else if(simul.value=="3") {
    
  }
}
