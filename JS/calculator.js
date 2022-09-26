   
var array = [];
var input = 0;

// function numbtn(arg)
// {
// document.getElementById('answer').value+=arg;
// }

function calculatearray(value){
    if (input !==0) {
        input = parseFloat(input);
        addToarray(input);
    }
    var answer = value[0];
    var divideByZero = 0;
    for(var i =2;i<value.length;i=i+2){
        switch (array[i-1]) {
            case '+':
                answer=answer+value[i];
                break;
            case '-':
                answer=answer-value[i];
                break;
            case '*':
                answer=answer*value[i];
                break;
            case '/':
                if(value[i] === 0)
                    divideByZero = 1;
                else
                 answer = answer/value[i];
                break;
        }
    }
    answer = parseFloat(answer);
    if (divideByZero === 1) {
        clearAll();
        document.getElementById('answer').value ="ERROR";
    }
    else
    {
        document.getElementById('answer').value = answer;
        input = answer;
        array = [];
    }
}

function addToarray(input){
    array.push(input);
}

function clearAll(){
    array=[];
    input=0;
    document.getElementById("answer").value = "";
}

function numbtn(arg){
    if (document.getElementById("answer").value === "Can't calculate" || 
       (document.getElementById('answer').value == "0" && arg != "."))
    {
        document.getElementById("answer").value = "";
    }
    if (!(arg === ".") || !input.match(/[.]/)) {
        input = input + arg;
        console.log(arg);
        //console.log(input);
        document.getElementById("answer").value +=arg;
    }
}

function oprbtn(arg){
    if(input !== 0 && input !== "-"){
        input = parseFloat(input);
        addToarray(input);
        addToarray(arg);
        //console.log(input)
        console.log(arg);
        document.getElementById("answer").value +=arg;
        input = 0;
    }
    if(arg == "-" && isNaN(array[0]) && input !== "-"){
        input = "-";
            document.getElementById("answer").value="-";  
    }
}
