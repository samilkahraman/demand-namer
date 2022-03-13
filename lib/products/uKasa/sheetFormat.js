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
	baslik: uKasaForm.baslik,
	recordedBy: uKasaForm.recordedBy,
	changedBy: uKasaForm.changedBy,
	changedDate: uKasaForm.changedDate,
	miktar: uKasaForm.miktar.toLocaleString(),
	kalinlik: uKasaForm.kalinlik.toLocaleString(),
	en: uKasaForm.en.toLocaleString(),
	boy: uKasaForm.boy.toLocaleString(),
	gorsel: uKasaForm.gorsel,
	cins: cinsConverter(uKasaForm.cins),
	cinsAciklama: uKasaForm.cinsAciklama,
	yapi: yapiConverter(uKasaForm.yapi),
	lambaDerinlik: uKasaForm.lambaDerinlik.toLocaleString(),
	lambaGenislik: uKasaForm.lambaGenislik.toLocaleString(),
	fitil: uKasaForm.fitil,
	pervazKanalGenisligi: uKasaForm.pervazKanalGenisligi.toLocaleString(),
	pervazKanalDerinligi: uKasaForm.pervazKanalDerinligi.toLocaleString(),
	pervazKanaliAltBosluk: uKasaForm.pervazKanaliAltBosluk.toLocaleString(),
	ozelProfilTipi: profilConverter(uKasaForm.ozelProfilTipi),
	ozelProfilAciklama: uKasaForm.ozelProfilAciklama,
	dumanFitili: booleanToValue(uKasaForm.dumanFitili),
	kesim45: booleanToValue(uKasaForm.kesim45),
	kilitKarsiligi: booleanToValue(uKasaForm.kilitKarsiligi),
	menteseKarsiligi: booleanToValue(uKasaForm.menteseKarsiligi),
	hidrolikKarsiligi: booleanToValue(uKasaForm.hidrolikKarsiligi),
	soveMi: booleanToValue(uKasaForm.soveMi),
	ekNot: uKasaForm.ekNot,
	indirimOrani: uKasaForm.indirimOrani,
	yoneticiNotu: uKasaForm.yoneticiNotu,
	verilenFiyat: uKasaForm.verilenFiyat,
	durumu: uKasaForm.durumu,
	musteriNotu: uKasaForm.musteriNotu,
	history: uKasaForm.history,
});

module.export = {
	uKasaToSheet,
};
