const btn = document.querySelector('#numbers');
const display_value = document.querySelector('#display-value');
var first_number;
const expression = [];
const number_arr = [];
const operator_arr = [];

function generate_buttons() {
    for (let i = 0; i < 10; i++) {
        const num = document.createElement('button');
        num.innerText = `${i}`;
        num.id = `${i}`;
        btn.appendChild(num);
        num.onclick = function () {
            const num_int = +num.id;
            number_arr.push(num_int);
        };
    };
};

function push_op(operator_to_add) {
    if (number_arr == null) {console.log('No numbers found.'); return;}

    operator_arr.push(operator_to_add);
    number = number_arr.join("");
    number_arr.splice(0, number_arr.length);   //clear existing array
    number = +number;    //make int value
    expression.push(number);   //add number to expression array
};

function add() { 
   console.log(expression[0] + expression[1]);
   return;
};

function sub() {
    console.log(expression[0] - expression[1]);
    return;
};

function mult(){
    console.log(expression[0] * expression[1]);
    return;
};

function div() {
    if (expression[1] == 0) {alert('Error: Cannot divide by zero'); return;}
    console.log(expression[0] / expression[1]);
    return;
};

function update_display() {

}

function evaluate_expression() {
    let op = operator_arr[0];
    let second_num = number_arr.join("");
    number_arr.splice(0, number_arr.length);   //clear existing array
    second_num = +second_num;    //make int value
    expression.push(second_num);   //add number to expression array

    switch (op) {
        case '+': add(); clear_arrays(); return;
        case '-': sub(); clear_arrays(); return;
        case '*': mult(); clear_arrays(); return;
        case '/': div(); clear_arrays(); return;
    };
}; 

generate_buttons();

function display_num_arr() {
    for(let numbers in expression) {
        console.log( numbers + ": " + expression[numbers]);
    };
};

function display_op_arr() {
    for (let operators in operator_arr) {
        console.log(operator_arr[operators]);
    }
}

function clear_arrays() {
    number_arr.splice(0, number_arr.length);   //clear existing array
    operator_arr.splice(0, operator_arr.length);
    expression.splice(0, expression.length);
}
//on number press, add to array
//on operator, push operator symbol to operator stack


//number press -> append to string
    //on operator press -> turn the string into an integer and add to array
    //push operator to stack and wait
    //press next number -> append to string until = is pressed
//when = is pressed -> call function passing in array and operator
    //if operator == +
        //add (array)
    //etc for each operator
