const express = require("express");
const app = express();
const PORT = 4002;
const fs = require("fs");
const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
const content = `${year}-${month}-${date}-${hours} :${minutes}:${seconds}`;
for(let i = 1;i<=10 ;i++){
    fs.writeFile(`./timestamp/${date}-${month}-${year}.html-${i}`, content, (err) => {
        console.log("File created successfully");
      });
}


app.listen(PORT, () => console.log(`The server started in :${PORT}`));
