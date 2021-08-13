const sozluk = require("../index.js")

sozluk("ad").then(data => {
    console.log(data);
});

async function consoleWrite() {
    const data = await sozluk("araba");
    console.log(data);
}

consoleWrite();
