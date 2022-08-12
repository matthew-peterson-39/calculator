const btn = document.querySelector('#numbers');
const display = document.querySelector('#display-value');
const display_value = display.innerText;

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
            update_display();
        };
    };
};

function start_display() {
    display.innerText = 0;
    return;
}

function update_display() {
    let current = number_arr.join("");
    current = +current;
    display.innerText = current;
    return;
}

function clear_display() {
    display.innerText = 0;
};

function push_op(operator_to_add) {
    if (number_arr == null) {alert('No numbers found.'); return;}

    operator_arr.push(operator_to_add);
    let number = number_arr.join("");
    number_arr.splice(0, number_arr.length);   //clear existing array
    number = +number;    //make int value
    expression.push(number);   //add number to expression array
};

function add() { 
    let result = expression[0] + expression[1];
    display_answer(result);
    clear_arrays();
    expression.push(result);
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

// function update_display(num_to_append) {
//     let current = display_value;
//      display_value(num_to_append);
// }

function display_answer(result) {
    display.innerText = result;
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

generate_buttons();
start_display();