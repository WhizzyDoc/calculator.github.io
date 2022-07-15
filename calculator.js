/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var output =document.getElementById('zero')
var step = document.getElementById("step")
var input =document.getElementsByClassName('but');
var len= input.length;
var opera =document.getElementsByClassName('fff');
var len2 = opera.length;
for(let i = 0; i < len; i++){
input[i].addEventListener('click',function(){
				step.value += input[i].value})}
//Add Operations
for(let x = 0; x < len2; x++){opera[x].addEventListener('click', function(){
/* function to perform operations on the answer...if....theres an answer already */
				if(output.value > 0) {
				  step.value = "";
				  step.value = output.value + opera[x].value;
				  output.value = "";
				}
/* else just ignore answer if there isnt */
				else if(output.value==""){
				  step.value += opera[x].value;
				}})}
				
//Display result
var equal =document.getElementById('equal');
equal.addEventListener('click', function(){
try{eval(step.value);}
catch(err){step.value="Syntax error"; return false};
output.value = (eval(step.value)).toFixed(12)})

//Clear screen
var ccc = document.getElementById('c')
c.onclick=function(){
  output.value='';
  step.value='';
 };
 
var ans = document.getElementById("ans");
ans.onclick=function(){
  step.value = output.value;
}

var rnd = document.getElementById("rnd");
rnd.onclick=function(){
  value1 = Math.random();
  step.value = value1.toFixed(6);
}

var root = document.getElementById('sqroot');
root.addEventListener('click', function(){
  output.value = Math.sqrt(step.value)});

var cuberoot = document.getElementById('cbrt');
cuberoot.addEventListener('click', function(){output.value = Math.cbrt(step.value)});

var inverse = document.getElementById('in');
inverse.onclick= function(){output.value = Number(1) / step.value};

var square = document.getElementById('square');
square.onclick= function(){output.value = step.value ** 2};

var cube = document.getElementById('cube');
cube.onclick= function() {output.value = step.value ** 3};

var pi = document.getElementById('pi');
//pi.value=Math.PI
pi.onclick= function(){step.value +=Math.PI.toFixed(8)};

var del = document.getElementById('del');
del.addEventListener('click', function(){step.value= step.value.slice(0, -1)});

var radians = document.getElementById('rad');
radians.onclick= function(){output.value = (step.value * Math.PI) / 180};

var sine = document.getElementById('sin');
sine.addEventListener('click', function(){output.value = Math.sin((step.value * Math.PI) /180);});

var cosine = document.getElementById('cos');
cosine.addEventListener('click', function(){output.value = Math.cos((step.value * Math.PI) /180)});

var tan = document.getElementById('tan');
tan.addEventListener('click', function(){output.value = Math.tan((step.value * Math.PI) /180)});

var log = document.getElementById('log');
log.addEventListener('click', function(){output.value = Math.log10(step.value)});

var ln = document.getElementById('ln');
ln.addEventListener('click', function(){output.value = Math.log(step.value)});

var fac = document.getElementById("fac");
fac.onclick = function() {
	if (Number(step.value) < 0) {
		output.value = "Math Error"; return false
		} else if(Number(step.value) === 0) {
			output.value = Number(1);
			} else {
				let fact = 1; for (i = 1; i <= Number(step.value); i++) { fact *= i; }
				output.value = Number(fact);
				}
}
	

var antilog = document.getElementById('alog');
antilog.onclick= function(){output.value = 10 ** step.value};
	
	
var bin = document.getElementById("bin");
bin.onclick= function() {
	output.value = (parseInt(step.value)).toString(2);
}


/* defining the constants */
const g = document.getElementById('g');
g.onclick= function(){step.value += Number(9.80665)};
const atm = document.getElementById('atm');
atm.onclick= function(){step.value += Number(760)};
const h = document.getElementById('h');
h.onclick= function(){step.value += Number(6.62607e-34)};
const G = document.getElementById('G');
G.onclick= function(){step.value += Number(6.673e-11)};
const C = document.getElementById('C');
C.onclick= function(){step.value += Number(2.9979e8)};
const uo = document.getElementById('uo');
uo.onclick= function(){step.value += Number(12.5664e-7)};
const eo = document.getElementById('eo');
eo.onclick= function(){step.value += Number(8.8542e-12)};
const e = document.getElementById('e');
e.onclick= function(){step.value += Number(1.6022e-19)};
const k = document.getElementById('k');
k.onclick= function(){step.value += Number(1.38065e-23)};
const mp = document.getElementById('mp');
mp.onclick= function(){step.value += Number(2.1765e-8)};
const tp = document.getElementById('tp');
tp.onclick= function(){step.value += Number(5.39106e-44)};
const lp = document.getElementById('lp');
lp.onclick= function(){step.value += Number(1.6162e-35)};
const Tp = document.getElementById('Tp');
Tp.onclick= function(){step.value += Number(1.4168e32)};
const n = document.getElementById('n');
n.onclick= function(){step.value += Number(6.023e23)};
