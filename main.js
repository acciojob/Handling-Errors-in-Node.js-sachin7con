//SGN, ONS, JSLN, JBB, JSSR, JSRK, JSSM, JMD, JSVM, JSP, JSRK
const fs = require('fs');


function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) {
        if(err.code === "ENOENT"){
          console.log(`Column '${filePath}' not found in the CSV.`);
        }        else {
          console.log('Error reading the file:', err.message);
        }
    } else {
      console.log(data);
    }
  })

}

//
const filePath = process.argv[2];
// file path 
if(!filePath){
  console.log("Please provide a file path.")
  process.exit(1);
}
// TODO: Call printFileContents with the command-line argument

printFileContents(filePath);
