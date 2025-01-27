let inputLabel=document.getElementById("inputContainer");
let calculation=0;
let innerString=""
// button variables
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let zero=document.getElementById("zero");
let sum=document.getElementById("sum");
let sub=document.getElementById("sub");
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");
let equal=document.getElementById("equal");
let clear=document.getElementById("clear");

//event listners
one.addEventListener('click',()=>{
    innerString=innerString+"1";
    inputLabel.value=innerString;
});

two.addEventListener('click',()=>{
    innerString=innerString+"2";
    inputLabel.value=innerString;
});

three.addEventListener('click',()=>{
    innerString=innerString+"3";
    inputLabel.value=innerString;
});

four.addEventListener('click',()=>{
    innerString=innerString+"4";
    inputLabel.value=innerString;
});
five.addEventListener('click',()=>{
    innerString=innerString+"5";
    inputLabel.value=innerString;
});

six.addEventListener('click',()=>{
    innerString=innerString+"6";
    inputLabel.value=innerString;
});

seven.addEventListener('click',()=>{
    innerString=innerString+"7";
    inputLabel.value=innerString;
});

eight.addEventListener('click',()=>{
    innerString=innerString+"8";
    inputLabel.value=innerString;
});

nine.addEventListener('click',()=>{
    innerString=innerString+"9";
    inputLabel.value=innerString;
});

zero.addEventListener('click',()=>{
    innerString=innerString+"0";
    inputLabel.value=innerString;
});

sum.addEventListener('click',()=>{
    innerString=innerString+"+";
    inputLabel.value=innerString;
});

sub.addEventListener('click',()=>{
    innerString=innerString+"-";
    inputLabel.value=innerString;
});

multiply.addEventListener('click',()=>{
    innerString=innerString+"*";
    inputLabel.value=innerString;
});

divide.addEventListener('click',()=>{
    innerString=innerString+"/";
    inputLabel.value=innerString;
});

equal.addEventListener('click',()=>{
    calculation=eval(innerString)
    innerString="";
    innerString=innerString+calculation;
    inputLabel.value=innerString;
});

clear.addEventListener('click',()=>{
    innerString=""
    inputLabel.value=innerString;
});