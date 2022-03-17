//Condition Statement

//if statement
let age = 17;
if (age>=14){
    console.log("Your age above 14 years");
}


//if else
let marks = 20;
if (marks>=35){
    console.log("You are Pass :)");
} else{
    console.log("your are Fail :(");
}


//if else if
let hasVoterCard = "Yes";

if(age>=18 && hasVoterCard=='Yes'){
    console.log('You can vote');
} else if(age>=18 && hasVoterCard != 'Yes'){
    console.log('You can not vote. You don\'t have voter id');
} else {
    console.log('You can not vote. Your age is below 18 years');
}


//nested if else
if(age>=18){
    if(hasVoterCard == 'Yes'){
        console.log('You can vote');
    } else {
        console.log("You can not vote. You don't have voter id card");
    }
} else {
    console.log('You can not vote. Your age is below 18 years');
}


//Ternary Operator

let option = "Yes";

document.write(option == 'Yes' ? "Option is Yes" : "Option is No");
//              condition      ? true           : false


//Nullish collising operator
let user;

user = "Mayur";

alert(user ?? "Gest User");  //If user is undefined then execute other which is lather on user


document.write("\n");
//Switch Statement
let input;

input = 'nohh';

switch(input){  //in switch statement only strict comparision (===) is done 

    case 1: //if(input === 1)
        document.write("Continue...");
        break;
    case 'y': //if(input === 'y')
        document.write("Continue...");
        break;
    case 'yes': //if(input === 'yes')
        document.write("Continue...");
        break;
    case 0: //if(input === 0)
        document.write("End...");
        break;
    case 'n': //if(input === 'n')
        document.write("End...");
        break;
    case 'no': //if(input === 'no')
        document.write("End...");
        break;
    default: 
        document.write("Wrong Input");
}

//firt 3 output is same the we small the code

switch(input){  //in switch statement only strict comparision (===) is done 

    case 1: //if(input === 1)
    case 'y': //if(input === 'y')
    case 'yes': //if(input === 'yes')
        document.write("Continue...");
        break;
    case 0: //if(input === 0)
    case 'n': //if(input === 'n')
    case 'no': //if(input === 'no')
        document.write("End...");
        break;
    default: 
        document.write("Wrong Input");
}