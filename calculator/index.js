/*calculator object starts*/
calculator = {

    /*addition operation starts*/      
    add:(function(num1,num2)
        {
            return num1+num2;
        }
    ),
    /*addition operation ends*/ 

    /*subtraction operation starts*/ 
    sub:(function(num1,num2)
        {
            return num1-num2;
        }
    ),
    /*subtraction operation ends*/ 

    /*multiplication operation starts*/ 
    multiplication:(function(num1,num2)
        {
            return num1 * num2;
        }
    ),
    /*multiplication operation ends*/ 

    /*division operation starts*/ 
    divide:(function(num1,num2)
        {
            return num1/num2;
        }
    )
    /*division operation ends*/ 
}
/*calculator object ends*/

console.log(calculator.divide(7,2));
console.log(calculator.add(7,2));
console.log(calculator.sub(7,2));
console.log(calculator.multiplication(7,2));

let a=[1,2,3,4,5,6];
a.unshift(10,0);
console.log(a[0]);