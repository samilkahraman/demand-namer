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
const uPervazToSheet = (uPervazForm) => ({
	baslik: uPervazForm.baslik,
	recordedBy: uPervazForm.recordedBy,
	changedBy: uPervazForm.changedBy,
	changedDate: uPervazForm.changedDate,
	miktar: uPervazForm.miktar.toLocaleString(),
	kalinlik: uPervazForm.kalinlik.toLocaleString(),
	en: uPervazForm.en.toLocaleString(),
	boy: uPervazForm.boy.toLocaleString(),
	gorsel: uPervazForm.gorsel,
	mdfKalinlik: uPervazForm.mdfKalinlik.toLocaleString(),
	cins: cinsConverter(uPervazForm.cins),
	cinsAciklama: uPervazForm.cinsAciklama,
	yapi: yapiConverter(uPervazForm.yapi),
	gecmeKalinlik: uPervazForm.gecmeKalinlik.toLocaleString(),
	gecmeIctenUzunluk: uPervazForm.gecmeIctenUzunluk.toLocaleString(),

	ozelProfilTipi: profilConverter(uPervazForm.ozelProfilTipi),
	ozelProfilAciklama: uPervazForm.ozelProfilAciklama,
	hamZimpara: booleanToValue(uPervazForm.hamZimpara),
	boyKesmeKertme: booleanToValue(uPervazForm.boyKesmeKertme),
	ekNot: uPervazForm.ekNot,
	indirimOrani: uPervazForm.indirimOrani,
	yoneticiNotu: uPervazForm.yoneticiNotu,
	verilenFiyat: uPervazForm.verilenFiyat,
	durumu: uPervazForm.durumu,

	musteriNotu: uPervazForm.musteriNotu,
	history: uPervazForm.history,
});

module.export = {
	uPervazToSheet,
};
