const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs = require("fs");

const filepath = "";
const term = "";
const newTerm = "";
const args = process.argv.slice(2)

//#region region Main function 
function search(filepath, term, newTerm) {
    const fileContent = fs.readFileSync(filepath, "utf8");

    if (fileContent.includes(term)) {
        let startIndex = fileContent.indexOf(term)
        let endIndex;

        for (let i = startIndex; i < fileContent.length; i++){
            if (fileContent[i] == " "){
                endIndex = i
                break;
            }
        }
        
        let res = fileContent.slice(startIndex, endIndex)
        fs.writeFileSync(filepath, fileContent.replace(res, newTerm))
    }
}
//#endregion
console.log(search(args[0], args[1], args[2]));
