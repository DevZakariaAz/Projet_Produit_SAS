const DataManager = require("../Data/DataManager");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

const Add = (first_name, last_name) => {
    let ApprenantArray = readData();

    let Apprenant = {
        id: ApprenantArray.length + 1,
        first_name: first_name,
        last_name: last_name,
    };

    ApprenantArray.push(Apprenant);
    writeData(ApprenantArray);
};

// const Delete = (id) => {
//     fs.readFile("prototype.json", "utf8", (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             let namesArray = [];

//             if (data) {
//                 namesArray = JSON.parse(data);
//             }

//             if (namesArray[id - 1] == undefined) {
//                 console.log(`name with id:${id} doesn't exist`);
//             } else {
//                 namesArray.splice(id - 1, 1);
//                 const jsonData = JSON.stringify(namesArray, null, 2);
//                 fs.writeFile("prototype.json", jsonData, (err) => {
//                     console.log(`delete ${id}`);
//                     if (err) {
//                         console.error(err);
//                     }
//                 });
//             }
//         }
//     });
// };

module.exports = {
    Add
}