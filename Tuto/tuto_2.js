const fs = require('fs');

// Écriture dans le fichier
const monTableau = [
    "pomme",
    "banane",
    "orange",
    42, "test"
];

const data = JSON.stringify(monTableau);

fs.writeFile('tuto_2.json', data, (err) => {
    if (err) {
        console.error(err);
    }
});

// Lecture du fichier
fs.readFile('tuto_2.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const tableauLu = JSON.parse(data);
        console.log(tableauLu);
    }
});