
/*section1 - play with variables starts*/
console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

console.log(" ");

/*section 1 -  play with variables ends*/

/*section 2 -  play with arrays starts*/

let players=["dhoni","kholi","sachin","raina","jadeja","stokes","smith","yuvaraj","ashwin","sam curran","jordan"];

players.shift();

players.length;

players.push("ishan");

players.sort();

players.forEach(randomNumber);

function randomNumber(value)
{

    /*let random_no =parseInt(Math.random().toString().slice(2,4));*/
    
    let random_no=Math.floor(Math.random() * (100 - 10 + 1) + 10);

    console.log(value+"-"+random_no);

}
console.log("");
let jersey = players.map((name)=>{console.log(name.toUpperCase()); name.toUpperCase();});

console.log("");
/*section 2 -  play with arrays ends*/


/* section 3 - play with functions*/

/*display numbers starts*/
function displayNumber()
{
    for(let i=1;i<=100;i++)
    {
       console.log(i);
    }
}
displayNumber();
/*display numbers ends*/

/*display date starts*/
function displayDate()
{
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = dd+ '/' + mm + '/' + yyyy;
    console.log(date);
}
displayDate();
/*display date ends*/

/*celsius_to_farenheit starts*/
function celsiusToFarenheit(celsius)
{
    const fahrenheit = (celsius * 1.8) + 32;
    console.log(fahrenheit);
}
celsiusToFarenheit(32);
/*celsius_to_farenheit ends*/

/*average starts*/
number=[1,2,3,4,5,6,7,8,9,10]
function calculateAverage()
{ 
    let sum=0;
    for(val of number)
    {
        sum+=val;
    }

    let avg=sum/number.length;

    console.log(avg);
}

calculateAverage(number);
/*average ends*/

/*reverseString starts*/
function reverseString(str)
{
    let rev_str="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev_str=rev_str+str[i];
    }

    console.log(rev_str);
}

reverseString("hello");
/*reverse string ends*/

/*section 3 -  play with functions ends*/

console.log(Math.floor(-10.78));