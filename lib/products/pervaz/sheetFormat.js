const booleanToValue = (val) => (val ? 'E' : 'H');
const valueToBoolean = (val) => val === 'E';

const cinsConverter = (cins) => {
    const map = {
        Lakelik: 'L',
        Desenli: 'D',
        'Kaplamalı Alpi': 'KA',
        'Kaplamalı Doğal': 'KD',
        'Kaplama Müşteriden': 'M',
        'Özel Kaplama Doğal': 'OD',
        'Özel Kaplama Alpi': 'OA',
        Mdflam: 'ML',
    };
    return map[cins] || cins;
};

const cinsReverseConverter = (code) => {
    const map = {
        L: 'Lakelik',
        D: 'Desenli',
        KA: 'Kaplamalı Alpi',
        KD: 'Kaplamalı Doğal',
        M: 'Kaplama Müşteriden',
        OD: 'Özel Kaplama Doğal',
        OA: 'Özel Kaplama Alpi',
        ML: 'Mdflam',
    };
    return map[code] || code;
};

const yapiConverter = (yapi) => {
    const map = {
        'L Pervaz': 'L',
        'Düz Pervaz': 'D',
    };
    return map[yapi] || yapi;
};

const yapiReverseConverter = (code) => {
    const map = {
        L: 'L Pervaz',
        D: 'Düz Pervaz',
    };
    return map[code] || code;
};

const profilConverter = (profil) => {
    const map = {
        Standart: 'S',
        'Farklı Radüsler': 'R',
        'Özel Profil': 'O',
        'Özel Profil + Bıçak': 'OB',
    };
    return map[profil] || profil;
};

const profilReverseConverter = (code) => {
    const map = {
        S: 'Standart',
        R: 'Farklı Radüsler',
        O: 'Özel Profil',
        OB: 'Özel Profil + Bıçak',
    };
    return map[code] || code;
};

const koseliConverter = (koseli) => {
    const map = {
        Köşeli: 'K',
        Bombeli: 'B',
    };
    return map[koseli] || koseli;
};

const koseliReverseConverter = (code) => {
    const map = {
        K: 'Köşeli',
        B: 'Bombeli',
    };
    return map[code] || code;
};

const pervazToSheet = (pervazForm) => ({
    ...pervazForm,
    cins: cinsConverter(pervazForm.cins),
    yapi: yapiConverter(pervazForm.yapi),
    koseliBombeli: koseliConverter(pervazForm.koseliBombeli),
    hamZimpara: booleanToValue(pervazForm.hamZimpara),
    boyKesmeKertme: booleanToValue(pervazForm.boyKesmeKertme),
    ozelProfilTipi: profilConverter(pervazForm.ozelProfilTipi),
});

const sheetToPervaz = (sheetData) => ({
    ...sheetData,
    cins: cinsReverseConverter(sheetData.cins),
    yapi: yapiReverseConverter(sheetData.yapi),
    koseliBombeli: koseliReverseConverter(sheetData.koseliBombeli),
    hamZimpara: valueToBoolean(sheetData.hamZimpara),
    boyKesmeKertme: valueToBoolean(sheetData.boyKesmeKertme),
    ozelProfilTipi: profilReverseConverter(sheetData.ozelProfilTipi),
});

module.exports = {
    pervazToSheet,
    sheetToPervaz,
};
