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
	baslik: kasaForm.baslik,
	recordedBy: kasaForm.recordedBy,
	changedBy: kasaForm.changedBy,
	changedDate: kasaForm.changedDate,
	miktar: kasaForm.miktar.toLocaleString(),
	kalinlik: kasaForm.kalinlik.toLocaleString(),
	en: kasaForm.en.toLocaleString(),
	boy: kasaForm.boy.toLocaleString(),
	gorsel: kasaForm.gorsel,
	cins: cinsConverter(kasaForm.cins),
	cinsAciklama: kasaForm.cinsAciklama,
	yapi: yapiConverter(kasaForm.yapi),
	lambaDerinlik: kasaForm.lambaDerinlik.toLocaleString(),
	lambaGenislik: kasaForm.lambaGenislik.toLocaleString(),
	koseliBombeli: koseliConverter(kasaForm.koseliBombeli),
	fitil: kasaForm.fitil,
	pervazKanalGenisligi: kasaForm.pervazKanalGenisligi.toLocaleString(),
	pervazKanalDerinligi: kasaForm.pervazKanalDerinligi.toLocaleString(),
	pervazKanaliAltBosluk: kasaForm.pervazKanaliAltBosluk.toLocaleString(),
	ozelProfilTipi: profilConverter(kasaForm.ozelProfilTipi),
	ozelProfilAciklama: kasaForm.ozelProfilAciklama,
	dumanFitili: booleanToValue(kasaForm.dumanFitili),
	kesim45: booleanToValue(kasaForm.kesim45),
	kilitKarsiligi: booleanToValue(kasaForm.kilitKarsiligi),
	menteseKarsiligi: booleanToValue(kasaForm.menteseKarsiligi),
	hidrolikKarsiligi: booleanToValue(kasaForm.hidrolikKarsiligi),
	soveMi: booleanToValue(kasaForm.soveMi),
	ekNot: kasaForm.ekNot,
	indirimOrani: kasaForm.indirimOrani,
	yoneticiNotu: kasaForm.yoneticiNotu,
	verilenFiyat: kasaForm.verilenFiyat,
	durumu: kasaForm.durumu,
	musteriNotu: kasaForm.musteriNotu,
	history: kasaForm.history,
});

module.export = {
	kasaToSheet,
};
