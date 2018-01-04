const fs = require("fs");
const csv = require("csvtojson");
const path = require("path");

const convertCSV2JSON = (file_path = "customer-data.csv") => {
  var buff = [];
  csv()
    .fromFile(file_path)
    .on('json', jsonObj => {
      buff.push(jsonObj)
      console.log(jsonObj)
    }).on('done',error =>{
      console.log(error)
      fs.writeFileSync('customer-data.json',JSON.stringify(buff,null,2))
      console.log("END")
    })
};

convertCSV2JSON(process.argv[2])
