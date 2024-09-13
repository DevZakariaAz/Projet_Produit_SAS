const DataManager = require("../Data/DataManager");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

// Function to generate a new unique ID
const generateId = () => {
    const produitsArray = readData();
    // Find the maximum ID in the array and add 1
    const maxId = produitsArray.reduce((max, produit) => Math.max(max, produit.id), 0);
    return maxId + 1;
};

// Function to add a product
const Add = (référence, nom, description, prix, catégorie, stock, image) => {
    let produitsArray = readData();

    let produit = {
        id: generateId(),
        référence,
        nom,
        description,
        prix,
        catégorie,
        stock,
        image,
    };

    produitsArray.push(produit);
    writeData(produitsArray);
    console.log("Product added successfully.");
};

// Function to delete a product by ID or name
const Delete = (input) => {
    let produitsArray = readData();
    let filteredArray;

    if (!isNaN(parseInt(input, 10))) {
        const id = parseInt(input, 10);
        filteredArray = produitsArray.filter(produit => produit.id !== id);
    } else {
        const name = input;
        filteredArray = produitsArray.filter(produit => produit.nom !== name);
    }

    if (filteredArray.length === produitsArray.length) {
        console.log("No product found with the provided ID or name.");
    } else {
        writeData(filteredArray);
        console.log("Product(s) deleted successfully.");
    }
};

// Function to view all products
const ViewAll = () => {
    const produitsArray = readData();
    if (produitsArray.length === 0) {
        console.log("No products available.");
    } else {
        console.log("\n=== All Products ===");
        produitsArray.forEach(produit => {
            console.log(`ID: ${produit.id}`);
            console.log(`Référence: ${produit.référence}`);
            console.log(`Nom: ${produit.nom}`);
            console.log(`Description: ${produit.description}`);
            console.log(`Prix: ${produit.prix}`);
            console.log(`Catégorie: ${produit.catégorie}`);
            console.log(`Stock: ${produit.stock}`);
            console.log(`Image: ${produit.image}`);
            console.log("----------------------");
        });
    }
};

module.exports = {
    Delete,
    Add,
    ViewAll, // Export the new function
};