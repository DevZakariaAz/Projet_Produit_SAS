const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

const Add = (first_name, last_name) => {
    console.log(first_name, last_name);
};

const Delete = (id) => {
    console.log(`delete ${id}`);
};

const startCalculator = async() => {
    let first_name;
    let last_name;
    let id = 0;
    const letter = await askQuestion("Enter the letter (a, d): ");
    if (letter == "a") {
        first_name = await askQuestion("Enter the first_name: ");
        last_name = await askQuestion("Enter the last_name: ");
        Add(first_name, last_name);
    } else if (letter == "d") {
        id = await askQuestion("Enter the id: ");
        Delete(id);
    }

    rl.close();
};

startCalculator();