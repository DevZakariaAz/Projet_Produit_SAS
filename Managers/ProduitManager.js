const DataManager = require("../Data/DataManager");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

// Function to add a product
const Add = (référence, nom, description, prix, catégorie, stock, image) => {
    let produitsArray = readData();

    let produit = {
        id: produitsArray.length + 1,
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

    // Check if input is a number for ID or a string for name
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

module.exports = {
    Delete,
    Add,
};