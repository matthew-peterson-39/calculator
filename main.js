const btn = document.querySelector('#numbers');

function generate_buttons() {
    for (let i = 0; i < 10; i++) {
        const num = document.createElement('button');
        num.innerText = `${i}`;
        btn.appendChild(num);
    };
};

generate_buttons();