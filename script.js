//Birthday calculator
function start(){

//creates the ammount of possible combinations.

function people(num)
{
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return ((num - 1) + people(num - 1));
    }
}

//calculates the probability via Poisson Distribution.

function calculator(y){
  return (1 - (Math.pow(2.71828,-1 * (people(y)/365))))*100;
}

//Changes the HTML to be the result and gets whatever value is in the input.

var peopleCount = document.getElementById("people").value;

document.getElementById("result").innerHTML = calculator(peopleCount);
}

//Lottery Calculator
function start2(){

function calculator2(x){
    return (((1/11238513)*(1/25)) * x)*100;
}

function calculator3(x){
    return ((1/11238513) * x)*100;
}

var ticketCount = document.getElementById("tickets").value;

document.getElementById("result2").innerHTML = calculator2(ticketCount);
document.getElementById("result2-1").innerHTML = calculator3(ticketCount);

}

//created by Tyler Kovalevich 1/10/16.
