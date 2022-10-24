console.log('js worked')

let total_challenges = 16;
let max_num = 50;
let min_num = 10;
let operators = ['+', '-'];
const result = [];
const result_container = document.getElementById('left');

const getRandomInt = (min,max) => {
    let result = 0;

    while (result < min) {
        result =  Math.floor(Math.random() * max);
    }
    return result
}

const getRandomFormula = (i) => {
    const num1 = getRandomInt(min_num, max_num);
    const num2 = getRandomInt(min_num, max_num);
    const operator_index = Math.floor(Math.random() * operators.length);
    const operator = operators[operator_index];

    const printFormula = (x, y) => {
        const formula = x.toString()
            .concat(' ', operator)
            .concat(' ', y.toString())
            .concat(' ', '=');

        result.push(formula);
        console.log(formula);
        return formula;
    }

    console.log(i, operator)
    if (operator === '-' && num1 < num2) {
        printFormula(num2, num1);
    } else {
        printFormula(num1, num2);
    }
}


const getAllFormulas = (total) => {
    for (let i = 1; i <= total; i++) {
        getRandomFormula(i);
    }
}

getAllFormulas(total_challenges);
console.log(result);

const createListItem = (formula_str) => {
    const item = document.createElement('li');
    item.textContent = formula_str;
    item.className = "list-group-item flex-fill";
    return item;
};

const createLeftSheet = () => {
   
    for (let i=0; i<result.length; i+=2) {
        let left_ul = document.createElement('ul');
        left_ul.className = 'list-group list-group-horizontal';
        let first_problem = createListItem(result[i]);
        left_ul.appendChild(first_problem);
        let second_problem = createListItem(result[i + 1]); 
        left_ul.appendChild(second_problem);
        result_container.append(left_ul)
    }
   
}

// main call
createLeftSheet();



