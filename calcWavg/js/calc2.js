var average = [];



function add() { 
    var num1 = Number(document.getElementById("arg1").value) ;
    var num2 = Number(document.getElementById("arg2").value) ;
    var num4 = Number(document.getElementById("arg4").value) ;
    var result = num1+num2;
    var avg = num4 + result;
    average.push(result);
    document.getElementById("arg3").value = result;
    document.getElementById("arg4").value = avg;
  
  // The function derives the sum of num1 and num2
 }

function subtract() {
    var num1 = Number(document.getElementById("arg1").value) ;
    var num2 = Number(document.getElementById("arg2").value) ;
    var num4 = Number(document.getElementById("arg4").value) ;
    var result = num1-num2;
    average.push(result);
    var avg = num4 - result;
    document.getElementById("arg3").value = result;
    document.getElementById("arg4").value = avg;
  
  // The function derives the difference of num1 and num2
}

function multiply() {
    var num1 = Number(document.getElementById("arg1").value) ;
    var num2 = Number(document.getElementById("arg2").value) ;
    var num4 = Number(document.getElementById("arg4").value) ;
    var result = num1*num2;
    var avg = num4 + result;
    average.push(result);
    document.getElementById("arg3").value = result;
    document.getElementById("arg4").value = avg;
    // The function derives the product of num1 and num2
}

function divide() {
    var num1 = Number(document.getElementById("arg1").value) ;
    var num2 = Number(document.getElementById("arg2").value) ;
    var num4 = Number(document.getElementById("arg4").value) ;
    var result = num1 / num2;
    var avg = num4 + result;
    average.push(result);
    document.getElementById("arg3").value = result;  
    document.getElementById("arg4").value = avg;
  // The function derives the division of num1 and num2
}

function avg() {
    let nums = 0;
    let leng = average.length;
    for(let i=0; i<leng;i++)
    {
     nums+=average[i];
    }
    nums /= leng;
    document.getElementById("arg5").value = nums;   // The function returns the average of num1 and num2
}

//create script to get all values and input into array