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

module.exports = {
    Delete,
    Add,
};