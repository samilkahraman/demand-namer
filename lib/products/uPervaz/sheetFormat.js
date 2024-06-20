const booleanToValue = (val) => (val === true ? 'E' : 'H');
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
        Havuz: 'H',
        MDF: 'M',
        'Yumuşak Kontrplak': 'YK',
        'Sert Kontrplak': 'SK',
        KontrTabla: 'KT',
        MAC: 'MAC',
    };
    return map[yapi] || yapi;
};

const yapiReverseConverter = (code) => {
    const map = {
        H: 'Havuz',
        M: 'MDF',
        YK: 'Yumuşak Kontrplak',
        SK: 'Sert Kontrplak',
        KT: 'KontrTabla',
        MAC: 'MAC',
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

const uPervazToSheet = (uPervazForm) => ({
    ...uPervazForm,
    cins: cinsConverter(uPervazForm.cins),
    yapi: yapiConverter(uPervazForm.yapi),
    ozelProfilTipi: profilConverter(uPervazForm.ozelProfilTipi),
    hamZimpara: booleanToValue(uPervazForm.hamZimpara),
    boyKesmeKertme: booleanToValue(uPervazForm.boyKesmeKertme),
});

const sheetToUPervaz = (sheetData) => ({
    ...sheetData,
    cins: cinsReverseConverter(sheetData.cins),
    yapi: yapiReverseConverter(sheetData.yapi),
    ozelProfilTipi: profilReverseConverter(sheetData.ozelProfilTipi),
    hamZimpara: valueToBoolean(sheetData.hamZimpara),
    boyKesmeKertme: valueToBoolean(sheetData.boyKesmeKertme),
});

module.exports = {
    uPervazToSheet,
    sheetToUPervaz,
};
