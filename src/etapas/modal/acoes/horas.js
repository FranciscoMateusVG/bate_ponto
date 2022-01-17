const indicaHoras = async (frame, tempoInicio, tempoFim) => {
	//Inicio
	const inicio = await frame.$("#P46_DT_HORA_INICIO");
	await inicio.click({ clickCount: 3 });
	await inicio.type(tempoInicio);
	//Fim
	const fim = await frame.$("#P46_DT_HORA_FIM");
	await fim.click({ clickCount: 3 });
	await fim.type(tempoFim);
};

module.exports = indicaHoras;
