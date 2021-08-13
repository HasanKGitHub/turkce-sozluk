# 📘 turkce-sozluk

# Konular
* [Tanımlama](https://github.com/HasanKGitHub/turkce-sozluk#tanımlama)
* [then yapısı ile örnek kullanım](https://github.com/HasanKGitHub/turkce-sozluk#then-yapısı-ile-ornek-kullanım)
* [async-await yapısı ile örnek kullanım](https://github.com/HasanKGitHub/turkce-sozluk#async-await-yapısı-ile-örnek-kullanım)
* [Sıkça Sorulan Sorular](https://github.com/HasanKGitHub/turkce-sozluk#sss)
* [Lisans](https://github.com/HasanKGitHub/turkce-sozluk#lisans)

npm install turkce-sozluk

## Tanımlama
```js
const sozluk = require("turkce-sozluk");
```

# "then" yapısı ile örnek kullanım
```js
const sozluk = require("../index.js");

sozluk("araba").then(data => {
    console.log(data);
});

/*{
  aranan_kelime: 'araba',
  madde_anlam: 'Tekerlekli, motorlu veya motorsuz her türlü kara taşıtı',
  ikinci_anlam: 'Bu taşıtın aldığı miktarda olan',
  ucuncu_anlam: 'Bu kelimenin üçüncü bir anlamı bulunamadı!',
  madde_ozel: 'Hayır',
  madde_cogul: 'Hayır',
  madde_lisan: 'Türkçe',
  madde_ontaki: 'Bu kelimenin ön takısı yok!',
  madde_telaffuz: 'Bu kelimenin telaffuzu bulunamadı!',
  madde_ornek: 'Sarhoşların araba sürmeleri sakıncalıdır.',
  madde_atasozleri: 'araba devrilince yol gösteren çok olur',
  madde_birlesikler: 'araba araba, araba falakası, araba mezarlığı, araba vapuru, bir araba, yaylı araba, at arabası, çöp arabası, domuz arabası, el arabası, kağnı 
arabası, kira arabası, makam arabası, muhacir arabası, ordövr arabası, öküz arabası, polis arabası, servis arabası, şeytanarabası, tanzifat arabası, taş arabası, tatar arabası, tay tay arabası, top arabası, yarış arabası, yük arabası'
}*/
```
# "async-await" yapısı ile örnek kullanım
```js
async function kelimeAra() {
    const data = await sozluk("araba");
    console.log(data);
}

kelimeAra();

/*{
  aranan_kelime: 'araba',
  madde_anlam: 'Tekerlekli, motorlu veya motorsuz her türlü kara taşıtı',
  ikinci_anlam: 'Bu taşıtın aldığı miktarda olan',
  ucuncu_anlam: 'Bu kelimenin üçüncü bir anlamı bulunamadı!',
  madde_ozel: 'Hayır',
  madde_cogul: 'Hayır',
  madde_lisan: 'Türkçe',
  madde_ontaki: 'Bu kelimenin ön takısı yok!',
  madde_telaffuz: 'Bu kelimenin telaffuzu bulunamadı!',
  madde_ornek: 'Sarhoşların araba sürmeleri sakıncalıdır.',
  madde_atasozleri: 'araba devrilince yol gösteren çok olur',
  madde_birlesikler: 'araba araba, araba falakası, araba mezarlığı, araba vapuru, bir araba, yaylı araba, at arabası, çöp arabası, domuz arabası, el arabası, kağnı 
arabası, kira arabası, makam arabası, muhacir arabası, ordövr arabası, öküz arabası, polis arabası, servis arabası, şeytanarabası, tanzifat arabası, taş arabası, tatar arabası, tay tay arabası, top arabası, yarış arabası, yük arabası'
}
*/
```
# SSS
`then, await ve async kullanmadan direkt sozluk("kelime") şeklinde yaparsam olur mu?` <br>
> Maalesef yapamazsınız. Modül asenkron çalıştığı için "then" veya "async-await" yapılarını kullanmak zorundasınız.
<br>

`Lisans ne anlama geliyor?`
> MIT Lisansı, bu modülü kimsenin kopyalayıp kendi modülüymüş gibi kullanmasına engel oluyor. Modülü isteyen istediği gibi kullanabilir fakat hiç kimse kendi modülüymüş gibi paylaşamaz.

### Lisans
* [MIT](https://github.com/HasanKGitHub/turkce-sozluk/blob/main/LICENSE)
