const fetch = require("node-fetch");
module.exports = {
    async request(word) {
        const name = encodeURI(word);
        const url = `https://sozluk.gov.tr/gts?ara=${name}`;
    
        const response = await fetch(url, { method: "GET" });
        const res = await response.json();
    
        const arr = ["ad", "boncuk", "kadın", "araba", "yazılım", "türk", "erkek"];
        const random = arr[Math.floor(Math.random() * arr.length)];
        if (res.error) throw new TypeError(`Sozlukte aramak istediginiz kelimenin anlami bulunamadi! Ornek Kelimeler: ${random}`);
        
        return res;
    }
};
