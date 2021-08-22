//SELECTORS IN DOM


// // to select using id
// let a = document.getElementById("first");
// console.log(a);

// // to select using class
// let b = document.getElementsByClassName("second");
// console.log(b);

// // to select using tag
// let c = document.getElementsByTagName("ul");
// console.log(c);

// // to select using query selector
// let d = document.querySelectorAll("second");
// console.log(d);




// TO GET CHILDREN

// let elm=document.getElementById("intro");
// let node=elm.children;
// console.log(node);

// TO GET CHILD NODES

// let elm1=document.getElementById("intro");
// let node1=elm1.childNodes;
// console.log(node1);


// TO GET FIRST CHILD

// let elm2=document.getElementById("intro");
// let node2=elm2.firstChild;
// console.log(node2);


// TO GET LAST CHILD

// let elm3=document.getElementById("intro");
// let node3=elm3.lastChild;
// console.log(node3);

// TO GET FIRST ELEMENT OF CHILDREN

// let elm4=document.getElementById("intro");
// let node4=elm4.firstElementChild;
// console.log(node4);


// TO GET LAST ELEMENT OF CHILDREN

// let elm5=document.getElementById("intro");
// let node5=elm5.lastElementChild;
// console.log(node5);


//TO GET THE CHILD NODES

// let elm6=document.getElementById("intro");
// let node6=elm6.childNodes;
// console.log(node6);


// TO GET THE PREVIOUS SIBLING ELEMENT

// let elm7=document.getElementById("first");
// let node7=elm7.previousElementSibling;
// console.log(node7);


// TO GET THE NEXT SIBLING ELEMENT

// let elm8=document.getElementById("first");
// let node8=elm8.nextElementSibling;
// console.log(node8);


// TO GET THE PREVIOUS SIBLING

// let elm9=document.getElementById("first");
// let node9=elm9.previousSibling;
// console.log(node9);


// TO GET THE NEXT SIBLING

// let elm10=document.getElementById("first");
// let node10=elm10.nextSibling;
// console.log(node10);


// TO GET THE PARENT ELEMENT

// let elm11=document.getElementById("first");
// let node11=elm11.parentElement;
// console.log(node11);




// let paragraph=document.getElementById("access");
// console.log(paragraph);
// //adding indidual css
// paragraph.style.backgroundColor="aqua";
// //adding multiple css
// let paragraph1=document.getElementById("access1");
// console.log(paragraph1);
// paragraph1.style.cssText= "background-color:aqua; color:white;";
// //adding classnames
// let paragraph2=document.getElementById("access2");
// console.log(paragraph2);
// paragraph2.classList.add("blueText");




function onAddClass() {
    let paragraph = document.getElementById("access");
    paragraph.classList.add("blueText");
}


function onRemoveClass() {
    let paragraph = document.getElementById("access");
    paragraph.classList.remove("blueText");
}


let paragraph = document.getElementById("access");
console.log(paragraph.innerText);
console.log(paragraph.textContent);
console.log(paragraph.innerHTML);
paragraph.innerHTML = "hello <b>world</b>";