const nameUPervazTR = (formik) => {
	const body = `${formik.values.mdfKalinlik}cm ${formik.values.yapi} ${
		formik.values.cins
	} ${formik.values.cinsAciklama} (${formik.values.kalinlik}x${
		formik.values.en
	}x${formik.values.boy}cm)
    Geçme Kalınlığı:${formik.values.gecmeKalinlik}cm Geçme İçten Uzunluğu:${
		formik.values.gecmeIctenUzunluk
	}cm 
    Profil:${formik.values.ozelProfilTipi} ${formik.values.ozelProfilAciklama} 
   ${formik.values.hamZimpara ? '+Ham Zımpara' : ''} ${
		formik.values.boyKesmeKertme ? '+Boy Kesme ve Kertme' : ''
	} ${formik.values.ekNot ? '*' + formik.values.ekNot : ''}
    `;
	return `U PERVAZ ${body.toLocaleLowerCase()}`;
};

module.export = {
	nameUPervazTR,
};
