const namePervazTR = (values) => {
	const gecmeIsimlendirme =
		values.yapi == 'Düz Pervaz'
			? ''
			: `Geçme(${values.gecmeKalinlik}x${values.gecmeIctenUzunluk})`;

	const body = `${values.cins} ${values.cinsAciklama} ${
		values.koseliBombeli
	} ${values.yapi} (${values.kalinlik}x${values.en}x${
		values.boy
	}cm) ${gecmeIsimlendirme} Profil(${values.ozelProfilTipi} ${
		values.ozelProfilAciklama
	}) 
   ${values.hamZimpara ? '+Ham Zımpara' : ''} ${
		values.boyKesmeKertme ? '+Boy Kesme ve Kertme' : ''
	} ${values.ekNot ? '*' + values.ekNot : ''}
    `;
	return `PERVAZ ${body.toLocaleLowerCase()}`;
};
module.export = {
	namePervazTR,
};
