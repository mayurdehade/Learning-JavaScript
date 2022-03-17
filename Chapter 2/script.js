let x;
x = 5; //int
x = "hello"; //string
x = 394.44; //float
x = true; //boolen

x = ["Mayur", "Bhimrao", "Dehade"]; //Array (Array is datatype which can store similar type of data)
for (let i=0; i<3; i++){
    console.log(x[i]);
}

x = {name: 'Mayur', age: 19}; //Object (key: value pair)

let y; ////undefined
console.log(y); 
console.log(typeof x); //typeof operator use for find data type of any variable (in this output is object)

/* In javascript we change the data type of variable (dynamic data type) means in x we store int, string, float value */


let a = "Mayur";
alert(`Hello ${a}`); //Template letral: for use variable inside string (use `) 

