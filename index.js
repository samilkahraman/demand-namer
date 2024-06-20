// Sheet Format
const { pervazToSheet, sheetToPervaz } = require('./lib/products/pervaz/sheetFormat');
const { uPervazToSheet, sheetToUPervaz } = require('./lib/products/uPervaz/sheetFormat');
const { uKasaToSheet, sheetToUKasa } = require('./lib/products/uKasa/sheetFormat');
const { kasaToSheet, sheetToKasa } = require('./lib/products/kasa/sheetFormat');
const { kanatToSheet, sheetToKanat } = require('./lib/products/kanat/sheetFormat');

// Namer (TR)
const { nameKasaTR } = require('./lib/products/kasa/namer');
const { namePervazTR } = require('./lib/products/pervaz/namer');
const { nameUPervazTR } = require('./lib/products/uPervaz/namer');
const { nameKanatTR } = require('./lib/products/kanat/namer');
const { nameUKasaTR } = require('./lib/products/uKasa/namer');

module.exports = {
    pervazToSheet,
    sheetToPervaz,
    uPervazToSheet,
    sheetToUPervaz,
    uKasaToSheet,
    sheetToUKasa,
    kasaToSheet,
    sheetToKasa,
    kanatToSheet,
    sheetToKanat,
    nameKasaTR,
    namePervazTR,
    nameUPervazTR,
    nameKanatTR,
    nameUKasaTR,
};
