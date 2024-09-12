const DataManager = require("../Data/DataManager");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

const array = [{
    first_name: "fahd",
    last_name: "suirita",
}, ];

writeData(array);

console.log(readData());