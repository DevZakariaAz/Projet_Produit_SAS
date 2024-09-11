const readline = require("readline");
const ApprenantManager = require("./Managers/ApprenantManager");
const Add = ApprenantManager.Add;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

const names_list = async() => {
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

names_list();