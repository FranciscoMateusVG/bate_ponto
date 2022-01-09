const selecionaEmpresa = require("./acoes/empresa");

const modal = async (elementHandle, params) => {
	const { empresa, tempoInicio, tempoFim, texto, data } = params;
	// Aqui Chega no Modal
	const frame = await elementHandle.contentFrame();
	await frame.waitForSelector("#B36122282037704243");
	await selecionaEmpresa(frame, empresa);
	// Seleciona Data
	await frame.click(".icon-calendar");
	let datas = await frame.$x("//a[contains(@class, 'ui-state-default')]");
	await datas[data - 1].click();
	// Escreve testim bonitim
	await frame.evaluate(
		() => (document.getElementById("P46_DS_OBSERVACAO").value = ""),
	);
	const textArea = await frame.$("#P46_DS_OBSERVACAO");
	await textArea.type(texto);
	//Indica as horas
	//Inicio
	const inicio = await frame.$("#P46_DT_HORA_INICIO");
	await inicio.click({ clickCount: 3 });
	await inicio.type(tempoInicio);
	//Fim
	const fim = await frame.$("#P46_DT_HORA_FIM");
	await fim.click({ clickCount: 3 });
	await fim.type(tempoFim);
	// Confirma
	//await frame.click("#B36122282037704243");
};

module.exports = modal;
