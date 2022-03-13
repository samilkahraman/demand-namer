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
const dolguTipiConverter = (dolguTipi) => {
	switch (dolguTipi) {
		case 'Standart':
			return 'S';
		case 'Okal':
			return 'O';
		case 'Halspan':
			return 'HP';
		case 'Diğer':
			return 'D';

		default:
			return dolguTipi;
	}
};
const derzTipiConverter = (derzTipi) => {
	switch (derzTipi) {
		case 'Yok':
			return 'Y';
		case 'Diğer':
			return 'D';

		default:
			return derzTipi;
	}
};
const derzSekliConverter = (derzSekli) => {
	switch (derzSekli) {
		case 'Yok':
			return 'Y';
		case 'Standart':
			return 'S';
		case 'V Derz':
			return 'V';
		case 'Düz Derz':
			return 'D';

		default:
			return derzSekli;
	}
};

const cumbaTipiConverter = (cumbaTipi) => {
	switch (cumbaTipi) {
		case 'ABS':
			return 'ABS';
		case 'PVC':
			return 'PVC';
		case 'Kaplama':
			return 'K';

		default:
			return cumbaTipi;
	}
};
const kilitYeriConverter = (kilitYeri) => {
	switch (kilitYeri) {
		case 'Yok':
			return 'Y';
		case 'StandartKale':
			return 'S';
		case 'Topuz':
			return 'T';
		case 'OtelTipi':
			return 'O';
		default:
			return kilitYeri;
	}
};
const menteseYeriConverter = (menteseYeri) => {
	switch (menteseYeri) {
		case 'Yok':
			return 'Y';
		case 'Yönlü 2':
			return 'Yprk2';
		case 'Yönlü 3':
			return 'Yprk3';
		case 'Gömme 2':
			return 'G2';
		case 'Gömme 3':
			return 'G3';
		default:
			return menteseYeri;
	}
};
const camYeriConverter = (camYeri) => {
	switch (camYeri) {
		case 'Yok':
			return 'Y';
		case '1GbSerenliCamyeri':
			return 'CS1';
		case '3GbSerenliCamyeri':
			return 'CS3';
		case '5GbSerenliCamyeri':
			return 'CS5';
		case '1GbMdfliCamyeri':
			return 'CM1';
		case '3GbMdfliCamyeri':
			return 'CM3';
		case '5GbMdfliCamyeri':
			return 'CM5';
		case 'Giyotin':
			return 'G';
		default:
			return camYeri;
	}
};
const cumbaBandiConverter = (cumbaBandi) => {
	switch (cumbaBandi) {
		case 'Yok':
			return '';
		case 'Yapılacak':
			return 'Y';
		case '2 Kenar':
			return '2A';
		case '4 Kenar':
			return '4A';
		default:
			return cumbaBandi;
	}
};
const yuzeyKaplamaSekliConverter = (yuzeyKaplamaSekli) => {
	switch (yuzeyKaplamaSekli) {
		case 'Suyuna':
			return 'SU';
		case 'Sokrasına':
			return 'SO';
		case 'H':
			return 'H';
		case 'E':
			return 'E';
		case 'Diğer':
			return 'D';
		default:
			return yuzeyKaplamaSekli;
	}
};

const kanatToSheet = (kanatForm) => ({
	...kanatForm,
	cins: cinsConverter(kanatForm.cins),
	dolguTipi: dolguTipiConverter(kanatForm.dolguTipi),
	derzTipi: derzTipiConverter(kanatForm.derzTipi),
	derzSekli: derzSekliConverter(kanatForm.derzSekli),
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

module.exports = {
	kanatToSheet,
};
