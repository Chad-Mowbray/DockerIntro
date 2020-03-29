const express = require('express');
const axios = require('axios')
let nunjucks  = require('nunjucks')



const app = express()
app.use(express.static('public'))

nunjucks.configure('public', {
    autoescape: true,
    express: app
});


const getColors = function() {

    return new Promise( (resolve, reject) => {
        axios.get("http://localhost:7777")
        .then(response => {
            resolve(response.data)
        })

    }).catch( err => console.error(err))

  
}





app.get('/', async (req, res) => {

    let data = await getColors()

    let colorChoice = req.query.state
    let hex;
    console.log(colorChoice)

    for(color of data.colors) {
        if(color.color === colorChoice) {
            hex = color.code.hex
            console.log(hex)
        }
    }
    res.render("colors.html", {"colorChoice": colorChoice, "hex": hex})
})


app.listen(9000, "0.0.0.0");
console.log(`Running on port 9000...`);

