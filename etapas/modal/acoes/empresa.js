const selecionaEmpresa = async (frame, empresa) => {
	const arr = [];
	const empresas = await frame.$x('//*[@id = "P46_W_CD_PROJETO"]/option');
	for (const i in empresas) {
		const empresa = empresas[i];
		const value = await (await empresa.getProperty("value")).jsonValue();
		const text = await (await empresa.getProperty("text")).jsonValue();
		arr.push({ value, text });
	}

	const filter = arr.filter((a) => new RegExp(empresa, "i").test(a.text));
	const valorEmpresa = filter[0].value;
	await frame.select("#P46_W_CD_PROJETO", valorEmpresa);
};

module.exports = selecionaEmpresa;
