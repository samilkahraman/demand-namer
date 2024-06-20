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

const uKasaToSheet = (uKasaForm) => ({
    ...uKasaForm,
    cins: cinsConverter(uKasaForm.cins),
    yapi: yapiConverter(uKasaForm.yapi),
    ozelProfilTipi: profilConverter(uKasaForm.ozelProfilTipi),
    dumanFitili: booleanToValue(uKasaForm.dumanFitili),
    kesim45: booleanToValue(uKasaForm.kesim45),
    kilitKarsiligi: booleanToValue(uKasaForm.kilitKarsiligi),
    menteseKarsiligi: booleanToValue(uKasaForm.menteseKarsiligi),
    hidrolikKarsiligi: booleanToValue(uKasaForm.hidrolikKarsiligi),
    soveMi: booleanToValue(uKasaForm.soveMi),
});

const sheetToUKasa = (sheetData) => ({
    ...sheetData,
    cins: cinsReverseConverter(sheetData.cins),
    yapi: yapiReverseConverter(sheetData.yapi),
    ozelProfilTipi: profilReverseConverter(sheetData.ozelProfilTipi),
    dumanFitili: valueToBoolean(sheetData.dumanFitili),
    kesim45: valueToBoolean(sheetData.kesim45),
    kilitKarsiligi: valueToBoolean(sheetData.kilitKarsiligi),
    menteseKarsiligi: valueToBoolean(sheetData.menteseKarsiligi),
    hidrolikKarsiligi: valueToBoolean(sheetData.hidrolikKarsiligi),
    soveMi: valueToBoolean(sheetData.soveMi),
});

module.exports = {
    uKasaToSheet,
    sheetToUKasa,
};
