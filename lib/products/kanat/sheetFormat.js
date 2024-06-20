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

const dolguTipiConverter = (dolguTipi) => {
    const map = {
        Standart: 'S',
        Okal: 'O',
        Halspan: 'HP',
        Diğer: 'D',
    };
    return map[dolguTipi] || dolguTipi;
};

const dolguTipiReverseConverter = (code) => {
    const map = {
        S: 'Standart',
        O: 'Okal',
        HP: 'Halspan',
        D: 'Diğer',
    };
    return map[code] || code;
};

const derzTipiConverter = (derzTipi) => {
    const map = {
        Yok: 'Y',
        Diğer: 'D',
    };
    return map[derzTipi] || derzTipi;
};

const derzTipiReverseConverter = (code) => {
    const map = {
        Y: 'Yok',
        D: 'Diğer',
    };
    return map[code] || code;
};

const derzSekliConverter = (derzSekli) => {
    const map = {
        Yok: 'Y',
        Standart: 'S',
        'V Derz': 'V',
        'Düz Derz': 'D',
    };
    return map[derzSekli] || derzSekli;
};

const derzSekliReverseConverter = (code) => {
    const map = {
        Y: 'Yok',
        S: 'Standart',
        V: 'V Derz',
        D: 'Düz Derz',
    };
    return map[code] || code;
};

const cumbaTipiConverter = (cumbaTipi) => {
    const map = {
        ABS: 'ABS',
        PVC: 'PVC',
        Kaplama: 'K',
    };
    return map[cumbaTipi] || cumbaTipi;
};

const cumbaTipiReverseConverter = (code) => {
    const map = {
        ABS: 'ABS',
        PVC: 'PVC',
        K: 'Kaplama',
    };
    return map[code] || code;
};

const kilitYeriConverter = (kilitYeri) => {
    const map = {
        Yok: 'Y',
        'Standart Kale': 'S',
        Topuz: 'T',
        'Otel Tipi': 'O',
    };
    return map[kilitYeri] || kilitYeri;
};

const kilitYeriReverseConverter = (code) => {
    const map = {
        Y: 'Yok',
        S: 'Standart Kale',
        T: 'Topuz',
        O: 'Otel Tipi',
    };
    return map[code] || code;
};

const menteseYeriConverter = (menteseYeri) => {
    const map = {
        Yok: 'Y',
        'Yönlü 2': 'Yprk2',
        'Yönlü 3': 'Yprk3',
        'Gömme 2': 'G2',
        'Gömme 3': 'G3',
    };
    return map[menteseYeri] || menteseYeri;
};

const menteseYeriReverseConverter = (code) => {
    const map = {
        Y: 'Yok',
        Yprk2: 'Yönlü 2',
        Yprk3: 'Yönlü 3',
        G2: 'Gömme 2',
        G3: 'Gömme 3',
    };
    return map[code] || code;
};

const camYeriConverter = (camYeri) => {
    const map = {
        Yok: 'Y',
        '1 Göbek Serenli': 'CS1',
        '3 Göbek Serenli': 'CS3',
        '5 Göbek Serenli': 'CS5',
        '1 Göbek MDFli': 'CM1',
        '3 Göbek MDFli': 'CM3',
        '5 Göbek MDFli': 'CM5',
        Giyotin: 'G',
    };
    return map[camYeri] || camYeri;
};

const camYeriReverseConverter = (code) => {
    const map = {
        Y: 'Yok',
        CS1: '1 Göbek Serenli',
        CS3: '3 Göbek Serenli',
        CS5: '5 Göbek Serenli',
        CM1: '1 Göbek MDFli',
        CM3: '3 Göbek MDFli',
        CM5: '5 Göbek MDFli',
        G: 'Giyotin',
    };
    return map[code] || code;
};

const cumbaBandiConverter = (cumbaBandi) => {
    const map = {
        Yok: '',
        Yapılacak: 'Y',
        '2 Kenar': 2,
        '4 Kenar': 4,
    };
    return map[cumbaBandi] || cumbaBandi;
};

const cumbaBandiReverseConverter = (code) => {
    const map = {
        '': 'Yok',
        Y: 'Yapılacak',
        2: '2 Kenar',
        4: '4 Kenar',
    };
    return map[code] || code;
};

const yuzeyKaplamaSekliConverter = (yuzeyKaplamaSekli) => {
    const map = {
        Suyuna: 'SU',
        Sokrasına: 'SO',
        H: 'H',
        E: 'E',
        Diğer: 'D',
    };
    return map[yuzeyKaplamaSekli] || yuzeyKaplamaSekli;
};

const yuzeyKaplamaSekliReverseConverter = (code) => {
    const map = {
        SU: 'Suyuna',
        SO: 'Sokrasına',
        H: 'H',
        E: 'E',
        D: 'Diğer',
    };
    return map[code] || code;
};

const kanatToSheet = (kanatForm) => ({
    ...kanatForm,
    cins: cinsConverter(kanatForm.cins),
    dolguTipi: dolguTipiConverter(kanatForm.dolguTipi),
    derzTipi: derzTipiConverter(kanatForm.derzTipi),
    derzSekli: derzSekliConverter(kanatForm.derzSekli),
    camYeri: camYeriConverter(kanatForm.camYeri),
    cumbaBandi: cumbaBandiConverter(kanatForm.cumbaBandi),
    cumbaTipi: cumbaTipiConverter(kanatForm.cumbaTipi),
    kilitYeri: kilitYeriConverter(kanatForm.kilitYeri),
    menteseYeri: menteseYeriConverter(kanatForm.menteseYeri),
    hidrolik: booleanToValue(kanatForm.hidrolik),
    giyotin: booleanToValue(kanatForm.giyotin),
    durbun: booleanToValue(kanatForm.durbun),
    sertAgacDonme: booleanToValue(kanatForm.sertAgacDonme),
    yuzeyKaplamaSekli: yuzeyKaplamaSekliConverter(kanatForm.yuzeyKaplamaSekli),
});

const sheetToKanat = (sheetData) => ({
    ...sheetData,
    cins: cinsReverseConverter(sheetData.cins),
    dolguTipi: dolguTipiReverseConverter(sheetData.dolguTipi),
    derzTipi: derzTipiReverseConverter(sheetData.derzTipi),
    derzSekli: derzSekliReverseConverter(sheetData.derzSekli),
    camYeri: camYeriReverseConverter(sheetData.camYeri),
    cumbaBandi: cumbaBandiReverseConverter(sheetData.cumbaBandi),
    cumbaTipi: cumbaTipiReverseConverter(sheetData.cumbaTipi),
    kilitYeri: kilitYeriReverseConverter(sheetData.kilitYeri),
    menteseYeri: menteseYeriReverseConverter(sheetData.menteseYeri),
    hidrolik: valueToBoolean(sheetData.hidrolik),
    giyotin: valueToBoolean(sheetData.giyotin),
    durbun: valueToBoolean(sheetData.durbun),
    sertAgacDonme: valueToBoolean(sheetData.sertAgacDonme),
    yuzeyKaplamaSekli: yuzeyKaplamaSekliReverseConverter(sheetData.yuzeyKaplamaSekli),
});

module.exports = {
    kanatToSheet,
    sheetToKanat,
};
