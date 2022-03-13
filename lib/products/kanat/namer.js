const nameKanatTR = (formik) => {
	const derzIsimlendirme =
		formik.values.derzSekli == 'Yok'
			? 'Derz Yok'
			: `DERZ(${formik.values.derzAdedi} adet ${
					formik.values.derzSekli
			  } ${
					parseInt(formik.values.derzBicakAdedi, 10) > 1
						? formik.values.derzBicakAdedi + ' farklı bıçak'
						: ''
			  })`;
	const cumbaIsimlendirme =
		formik.values.cumbaBandi == 'Yok'
			? 'Cumba Yok'
			: `Cumba(Bantlama:${formik.values.cumbaBandi}, Tipi:${formik.values.cumbaTipi}, Bant Kalınlığı:${formik.values.cumbaKalinligi}`;

	const dolguIsimlendirme = `${
		formik.values.dolguTipi == 'Standart'
			? ''
			: formik.values.dolguTipi + ' dolgulu'
	}`;

	const body = `${dolguIsimlendirme} ${formik.values.cins} ${
		formik.values.cinsAciklama
	}(${formik.values.kalinlik}x${formik.values.en}x${formik.values.boy}cm)
 ${derzIsimlendirme} 
 ${cumbaIsimlendirme}
 Cam Yeri ${formik.values.camYeri} Kilit Yeri:${
		formik.values.kilitYeri
	} Menteşe Yeri:${formik.values.menteseYeri}
   ${formik.values.hidrolik ? '+Hidrolik Yeri' : ''} ${
		formik.values.giyotin ? '+Giyotin Kesim' : ''
	}${formik.values.durbun ? '+Dürbün Yeri' : ''} ${
		formik.values.sertAgacDonme ? '+Sert Ağaç Dönme' : ''
	} ${formik.values.ekNot ? '*' + formik.values.ekNot : ''}
    `;
	return `KANAT ${body.toLocaleLowerCase()}`;
};
module.export = {
	nameKanatTR,
};
