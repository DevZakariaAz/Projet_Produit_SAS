const readline = require("readline");
const ProduitManager = require("./Managers/ProduitManager");
const Add = ProduitManager.Add;
const Delete = ProduitManager.Delete;
const ViewAll = ProduitManager.ViewAll; // Import the ViewAll function

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

//! Function to display the menu
const showMenu = () => {
    console.log("\n========== Welcome to Produit Manager ==========");
    console.log(" a - Add a product");
    console.log(" d - Delete a product");
    console.log(" v - View all products");
    console.log(" e - Exit");
    console.log("================================================");
};

const produitMenu = async() => {
    let exit = false;

    while (exit === false) {
        showMenu(); // Display the plain menu
        const choice = await askQuestion("\nChoose an option (a, d, v, e): "); // Add 'v' option

        if (choice === "a") {
            const référence = await askQuestion("Enter the référence: ");
            const nom = await askQuestion("Enter the nom: ");
            const description = await askQuestion("Enter the description: ");
            const prix = await askQuestion("Enter the prix: ");
            const catégorie = await askQuestion("Enter the catégorie: ");
            const stock = await askQuestion("Enter the stock: ");
            const image = await askQuestion("Enter the image URL or path: ");
            Add(référence, nom, description, prix, catégorie, stock, image);
        } else if (choice === "d") {
            const id = await askQuestion("Enter the name or id: ");
            Delete(id);
        } else if (choice === "v") {
            ViewAll();
        } else if (choice === "e") {
            exit = true;
            console.log("Exiting the program. Goodbye!");
        } else {
            console.log("Invalid input. Please enter 'a' to add, 'd' to delete, 'v' to view all products, or 'e' to exit.");
        }
    }

    rl.close();
};

produitMenu();