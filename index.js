import  inputText from "inquirer";
import qr from "qr-image"
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';


//during the forking.



inputText
.prompt([
    {
        message: "Type URL Here",
        name: "URL",
    }
  ])

  .then((answers) => {
     const url = answers.URL;
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream(`qr_${uuidv4()}.png`));

     fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
     })
  })

  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });