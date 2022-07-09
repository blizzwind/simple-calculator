document.getElementById("out").focus();
document.addEventListener("keypress", function() {
  if (event.key === "Enter") {
    fenter();
  }
});
function f0() {
  document.getElementById("out").value += "0";
  document.getElementById("out").focus();
}
function f1() {
  document.getElementById("out").value += "1";
  document.getElementById("out").focus();
}
function f2() {
  document.getElementById("out").value += "2";
  document.getElementById("out").focus();
}
function f3() {
  document.getElementById("out").value += "3";
  document.getElementById("out").focus();
}
function f4() {
  document.getElementById("out").value += "4";
  document.getElementById("out").focus();
}
function f5() {
  document.getElementById("out").value += "5";
  document.getElementById("out").focus();
}
function f6() {
  document.getElementById("out").value += "6";
  document.getElementById("out").focus();
}
function f7() {
  document.getElementById("out").value += "7";
  document.getElementById("out").focus();
}
function f8() {
  document.getElementById("out").value += "8";
  document.getElementById("out").focus();
}
function f9() {
  document.getElementById("out").value += "9";
  document.getElementById("out").focus();
}
function fplus() {
  document.getElementById("out").value += "+";
  document.getElementById("out").focus();
}
function fminus() {
  document.getElementById("out").value += "-";
  document.getElementById("out").focus();
}
function ftimes() {
  document.getElementById("out").value += "*";
  document.getElementById("out").focus();
}
function fdivide() {
  document.getElementById("out").value += "/";
  document.getElementById("out").focus();
}
function fdot() {
  document.getElementById("out").value += ".";
  document.getElementById("out").focus();
}
function fsqrt() {
  document.getElementById("out").value += "**(1/2)";
  document.getElementById("out").focus();
}
function fsquare() {
  document.getElementById("out").value += "**(2)";
  document.getElementById("out").focus();
}
function fpi() {
  document.getElementById("out").value += "Math.PI";
  document.getElementById("out").focus();
}
function fbs() {
  document.getElementById("out").value = document.getElementById("out").value.slice(0,-1);
  document.getElementById("out").focus();
}
function fenter() {
  document.getElementById("out").value = eval(document.getElementById("out").value);
  document.getElementById("out").focus();
}
function fe() {
  document.getElementById("out").value += "Math.E";
  document.getElementById("out").focus();
}
function fac() {
  document.getElementById("out").value = "";
  document.getElementById("out").focus();
}
function fl() {
  document.getElementById("out").value += "(";
  document.getElementById("out").focus();
}
function fr() {
  document.getElementById("out").value += ")";
  document.getElementById("out").focus();
}