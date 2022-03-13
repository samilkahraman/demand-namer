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
const koseliConverter = (koseli) => {
	switch (koseli) {
		case 'Köşeli':
			return 'K';
		case 'Bombeli':
			return 'B';

		default:
			return koseli;
	}
};

const kasaToSheet = (kasaForm) => ({
	...kasaForm,
	cins: cinsConverter(kasaForm.cins),
	yapi: yapiConverter(kasaForm.yapi),
	koseliBombeli: koseliConverter(kasaForm.koseliBombeli),
	ozelProfilTipi: profilConverter(kasaForm.ozelProfilTipi),
	dumanFitili: booleanToValue(kasaForm.dumanFitili),
	kesim45: booleanToValue(kasaForm.kesim45),
	kilitKarsiligi: booleanToValue(kasaForm.kilitKarsiligi),
	menteseKarsiligi: booleanToValue(kasaForm.menteseKarsiligi),
	hidrolikKarsiligi: booleanToValue(kasaForm.hidrolikKarsiligi),
	soveMi: booleanToValue(kasaForm.soveMi),
});

module.exports = {
	kasaToSheet,
};
