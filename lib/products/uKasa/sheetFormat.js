const booleanToValue = (val) => (val === true ? 'E' : 'H');
const cinsConverter = (cins) => {
	switch (cins) {
		case 'Lakelik':
			return 'L';
		case 'Desenli':
			return 'D';
		case 'Kaplamalı Alpi':
			return 'KA';
		case 'Kaplamalı Doğal':
			return 'KD';
		case 'Kaplama Müşteriden':
			return 'M';
		case 'Özel Kaplama Doğal':
			return 'OD';
		case 'Özel Kaplama Alpi':
			return 'OA';
		case 'Mdflam':
			return 'ML';
		default:
			return cins;
	}
};
const yapiConverter = (yapi) => {
	switch (yapi) {
		case 'Havuz':
			return 'H';
		case 'MDF':
			return 'M';
		case 'Yumuşak Kontrplak':
			return 'YK';
		case 'Sert Kontrplak':
			return 'SK';
		case 'KontrTabla':
			return 'KT';
		case 'MAC':
			return 'MAC';
		default:
			return yapi;
	}
};
const profilConverter = (profil) => {
	switch (profil) {
		case 'Standart':
			return 'S';
		case 'Farklı Radüsler':
			return 'R';
		case 'Özel Profil':
			return 'O';
		case 'Özel Profil + Bıçak':
			return 'OB';
		default:
			return profil;
	}
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

module.exports = {
	uKasaToSheet,
};
