const booleanToValue = (val) => (val ? 'E' : 'H');
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
		case 'L Pervaz':
			return 'L';
		case 'Düz Pervaz':
			return 'D';

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
const pervazToSheet = (pervazForm) => ({
	...pervazForm,
	cins: cinsConverter(pervazForm.cins),
	yapi: yapiConverter(pervazForm.yapi),
	koseliBombeli: koseliConverter(pervazForm.koseliBombeli),
	hamZimpara: booleanToValue(pervazForm.hamZimpara),
	boyKesmeKertme: booleanToValue(pervazForm.boyKesmeKertme),
	ozelProfilTipi: profilConverter(pervazForm.ozelProfilTipi),
});
module.exports = {
	pervazToSheet,
};
