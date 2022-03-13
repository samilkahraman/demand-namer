// Sheet Format
const { pervazToSheet } = require('./lib/products/pervaz/sheetFormat');
const { uPervazToSheet } = require('./lib/products/uPervaz/sheetFormat');
const { uKasaToSheet } = require('./lib/products/uKasa/sheetFormat');
const { kasaToSheet } = require('./lib/products/kasa/sheetFormat');
const { kanatToSheet } = require('./lib/products/kanat/sheetFormat');

// Namer (TR)
const { nameKasaTR } = require('./lib/products/kasa/namer');
const { namePervazTR } = require('./lib/products/pervaz/namer');
const { nameUPervazTR } = require('./lib/products/uPervaz/namer');
const { nameKanatTR } = require('./lib/products/kanat/namer');
const { nameUKasaTR } = require('./lib/products/uKasa/namer');

module.exports = {
	pervazToSheet,
	uPervazToSheet,
	uKasaToSheet,
	kasaToSheet,
	kanatToSheet,
	nameKasaTR,
	namePervazTR,
	nameUPervazTR,
	nameKanatTR,
	nameUKasaTR,
};
