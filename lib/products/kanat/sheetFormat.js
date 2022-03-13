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

// let rowValues = [
// 	{
// 		id: 1,
// 		keyColumn: 'Miktar',
// 		valueColumn: kanatForm.miktar.toLocaleString(),
// 	},
// 	{
// 		id: 2,
// 		keyColumn: 'Kalınlık',
// 		valueColumn: kanatForm.kalinlik.toLocaleString(),
// 	},
// 	{
// 		id: 3,
// 		keyColumn: 'En',
// 		valueColumn: kanatForm.en.toLocaleString(),
// 	},
// 	{
// 		id: 4,
// 		keyColumn: 'Boy',
// 		valueColumn: kanatForm.boy.toLocaleString(),
// 	},
// 	{
// 		id: 5,
// 		keyColumn: 'Cins',
// 		valueColumn: cinsConverter(kanatForm.cins),
// 	},
// 	{
// 		id: 6,
// 		keyColumn: 'Cins Açıklama',
// 		valueColumn: kanatForm.cinsAciklama,
// 	},
// 	{
// 		id: 7,
// 		keyColumn: 'Dolgu Tipi',
// 		valueColumn: dolguTipiConverter(kanatForm.dolguTipi),
// 	},
// 	{
// 		id: 8,
// 		keyColumn: 'Derz Tipi',
// 		valueColumn: derzTipiConverter(kanatForm.derzTipi),
// 	},
// 	{
// 		id: 9,
// 		keyColumn: 'Derz Adedi',
// 		valueColumn: kanatForm.derzAdedi.toLocaleString(),
// 	},
// 	{
// 		id: 10,
// 		keyColumn: 'Derz Şekli',
// 		valueColumn: derzSekliConverter(kanatForm.derzSekli),
// 	},
// 	{
// 		id: 11,
// 		keyColumn: 'Derz Bıçak Adedi',
// 		valueColumn: kanatForm.derzBicakAdedi.toLocaleString(),
// 	},
// 	{
// 		id: 12,
// 		keyColumn: 'Cumba Bandı',
// 		valueColumn: cumbaBandiConverter(kanatForm.cumbaBandi),
// 	},
// 	{
// 		id: 112,
// 		keyColumn: 'Cumba Kalınlığı',
// 		valueColumn: kanatForm.cumbaKalinligi.toLocaleString(),
// 	},
// 	{
// 		id: 910,
// 		keyColumn: 'Cumba Tipi',
// 		valueColumn: cumbaTipiConverter(kanatForm.cumbaTipi),
// 	},
// 	{
// 		id: 911,
// 		keyColumn: 'Kilit Yeri',
// 		valueColumn: kilitYeriConverter(kanatForm.kilitYeri),
// 	},
// 	{
// 		id: 912,
// 		keyColumn: 'Menteşe Yeri',
// 		valueColumn: menteseYeriConverter(kanatForm.menteseYeri),
// 	},

// 	{
// 		id: 17,
// 		keyColumn: 'Hidrolik',
// 		valueColumn: booleanToValue(kanatForm.hidrolik),
// 	},
// 	{
// 		id: 18,
// 		keyColumn: 'Giyotin',
// 		valueColumn: booleanToValue(kanatForm.giyotin),
// 	},
// 	{
// 		id: 19,
// 		keyColumn: 'Dürbün',
// 		valueColumn: booleanToValue(kanatForm.durbun),
// 	},
// 	{
// 		id: 20,
// 		keyColumn: 'Sert Ağaç Dönme',
// 		valueColumn: booleanToValue(kanatForm.sertAgacDonme),
// 	},
// 	{
// 		id: 21,
// 		keyColumn: 'Cam Yeri',
// 		valueColumn: camYeriConverter(kanatForm.camYeri),
// 	},
// 	{
// 		id: 22,
// 		keyColumn: 'Yüzey Kaplama Şekli',
// 		valueColumn: yuzeyKaplamaSekliConverter(kanatForm.yuzeyKaplamaSekli),
// 	},
// 	{
// 		id: 23,
// 		keyColumn: '',
// 		valueColumn: '',
// 	},
// 	{
// 		id: 24,
// 		keyColumn: 'Ek Notlar',
// 		valueColumn: kanatForm.ekNot,
// 	},
// ];

const kanatToSheet = (kanatForm) => ({
	baslik: kanatForm.baslik,
	recordedBy: kanatForm.recordedBy,
	changedBy: kanatForm.changedBy,
	changedDate: kanatForm.changedDate,
	miktar: kanatForm.miktar.toLocaleString(),
	kalinlik: kanatForm.kalinlik.toLocaleString(),
	en: kanatForm.en.toLocaleString(),
	boy: kanatForm.boy.toLocaleString(),
	gorsel: kanatForm.gorsel,
	cins: cinsConverter(kanatForm.cins),
	cinsAciklama: kanatForm.cinsAciklama,
	dolguTipi: dolguTipiConverter(kanatForm.dolguTipi),
	derzTipi: derzTipiConverter(kanatForm.derzTipi),
	derzAdedi: kanatForm.derzAdedi.toLocaleString(),
	derzSekli: derzSekliConverter(kanatForm.derzSekli),
	derzBicakAdedi: kanatForm.derzBicakAdedi.toLocaleString(),
	cumbaBandi: cumbaBandiConverter(kanatForm.cumbaBandi),
	cumbaKalinligi: kanatForm.cumbaKalinligi.toLocaleString(),
	cumbaTipi: cumbaTipiConverter(kanatForm.cumbaTipi),
	kilitYeri: kilitYeriConverter(kanatForm.kilitYeri),
	menteseYeri: menteseYeriConverter(kanatForm.menteseYeri),
	hidrolik: booleanToValue(kanatForm.hidrolik),
	giyotin: booleanToValue(kanatForm.giyotin),
	durbun: booleanToValue(kanatForm.durbun),
	sertAgacDonme: booleanToValue(kanatForm.sertAgacDonme),
	camYeri: kanatForm.camYeri,
	yuzeyKaplamaSekli: yuzeyKaplamaSekliConverter(kanatForm.yuzeyKaplamaSekli),
	altUstSerenAdet: kanatForm.altUstSerenAdet.toLocaleString(),
	serenDestekMetre: kanatForm.serenDestekMetre.toLocaleString(),
	ekNot: kanatForm.ekNot,
	indirimOrani: kanatForm.indirimOrani,
	yoneticiNotu: kanatForm.yoneticiNotu,
	verilenFiyat: kanatForm.verilenFiyat,
	durumu: kanatForm.durumu,
	musteriNotu: kanatForm.musteriNotu,
	history: kanatForm.history,
});

module.export = {
	kanatToSheet,
};
