// to select using id
let a = document.getElementById("first");
console.log(a);

// to select using class
let b = document.getElementsByClassName("second");
console.log(b);

// to select using tag
let c = document.getElementsByTagName("ul");
console.log(c);

// to select using query selector
let d = document.querySelectorAll("second");
console.log(d);



let elm=document.getElementById("intro");
let node=elm.children;
console.log(node);



let elm1=document.getElementById("intro");
let node1=elm1.childNodes;
console.log(node1);


let elm2=document.getElementById("intro");
let node2=elm2.firstChild;
console.log(node2);




let elm3=document.getElementById("intro");
let node3=elm3.lastChild;
console.log(node3);



let elm4=document.getElementById("intro");
let node4=elm4.firstElementChild;
console.log(node4);


let elm5=document.getElementById("intro");
let node5=elm5.lastElementChild;
console.log(node5);



let elm6=document.getElementById("intro");
let node6=elm6.childNodes;
console.log(node6);


 
let elm7=document.getElementById("first");
let node7=elm7.previousElementSibling;
console.log(node7);


let elm8=document.getElementById("first");
let node8=elm8.nextElementSibling;
console.log(node8);

let elm9=document.getElementById("first");
let node9=elm9.previousSibling;
console.log(node9);


let elm10=document.getElementById("first");
let node10=elm10.nextSibling;
console.log(node10);


let elm11=document.getElementById("first");
let node11=elm11.parentElement;
console.log(node11);




