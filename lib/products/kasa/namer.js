const nameKasaTR = (formik) => {
	const body = `${formik.values.soveMi ? 'söve' : ''} ${formik.values.yapi} ${
		formik.values.cins
	} ${formik.values.cinsAciklama} ${formik.values.kalinlik}x${
		formik.values.en
	}x${formik.values.boy}cm  
    lamba(${formik.values.lambaDerinlik}x${
		formik.values.lambaGenislik
	}) pervaz kanalı(${formik.values.pervazKanalGenisligi}x${
		formik.values.pervazKanalDerinligi
	}) Fitil(${formik.values.fitil}) Profil(${formik.values.ozelProfilTipi} ${
		formik.values.ozelProfilAciklama
	}) 
    ${formik.values.dumanFitili ? '+Duman Fitili' : ''} ${
		formik.values.kesim45 ? '+45 Kesim' : ''
	} ${formik.values.kilitKarsiligi ? '+Kilit Karşılığı' : ''} ${
		formik.values.menteseKarsiligi ? '+Menteşe Karşılığı' : ''
	} ${formik.values.hidrolikKarsiligi ? '+Hidrolik Karşılığı' : ''} ${
		formik.values.ekNot ? '*' + formik.values.ekNot : ''
	}
    `;
	return `KASA ${body.toLocaleLowerCase()}
    `;
};
module.export = {
	nameKasaTR,
};
