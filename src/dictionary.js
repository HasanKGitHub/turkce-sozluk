const util = require("./utils/util.js");

module.exports = async (word) => {
    const res = await util.request(word);

    const { madde_duz, telaffuz, lisan, birlesikler, atasozu, anlamlarListe, cogul_mu, ozel_mi, on_taki } = res[0];

    const madde_telaffuz = telaffuz ? telaffuz : "Bu kelimenin telaffuzu bulunamadı!";
    const madde_lisan = lisan ? lisan : "Türkçe";
    const madde_onTaki = on_taki === null ? "Bu kelimenin ön takısı yok!" : on_taki ;
    const madde_birlesikler = birlesikler === null ? "Bu kelimenin birleşikleri bulunamadı!" : birlesikler ;
    const madde_ozelMi = ozel_mi === "1" ? "Evet" : "Hayır";
    const madde_cogulMu = cogul_mu === "1" ? "Evet" : "Hayır";
    
    const madde_atasozleri = atasozu ? atasozu[0].madde : "Bu kelimeyi içeren bir atasözü bulunamadı!";
    const madde_anlam = anlamlarListe[0] ? anlamlarListe[0].anlam : "Bu kelimenin anlamı bulunamadı!";
    const madde_ikinciAnlam = anlamlarListe[1] ? anlamlarListe[1].anlam : "Bu kelimenin ikinci bir anlamı bulunamadı!";
    const madde_ucuncuAnlam = anlamlarListe[2] ? anlamlarListe[2].anlam : "Bu kelimenin üçüncü bir anlamı bulunamadı!";
    const { orneklerListe } = anlamlarListe[0];
    const madde_ornek = orneklerListe ? orneklerListe[0].ornek : "Bu kelimeye ait bir örnek bulunamadı!" 


    const jsonFile = {
        aranan_kelime: madde_duz,
        madde_anlam: madde_anlam,
        ikinci_anlam: madde_ikinciAnlam,
        ucuncu_anlam: madde_ucuncuAnlam,
        madde_ozel: madde_ozelMi,
        madde_cogul: madde_cogulMu,
        madde_lisan: madde_lisan,
        madde_ontaki: madde_onTaki,
        madde_telaffuz: madde_telaffuz,
        madde_ornek: madde_ornek,
        madde_atasozleri: madde_atasozleri,
        madde_birlesikler: madde_birlesikler
    }

    return jsonFile;
}
