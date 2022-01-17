const selecionaEmpresa = require("./acoes/empresa");
const selecionaData = require("./acoes/data");
const escreveTexto = require("./acoes/texto");
const indicaHoras = require("./acoes/horas");

const modal = async (page, param) => {
	const { empresa, tempoInicio, tempoFim, texto, data } = param;
	// Aqui Chega no Modal
	await page.waitForSelector("#B38592991709747903");
	await page.click("#B38592991709747903");

	await page.waitForSelector(".ui-dialog");
	const elementHandle = await page.waitForSelector("div.ui-dialog iframe");
	await page.waitForTimeout(2000);

	const frame = await elementHandle.contentFrame();
	await frame.waitForSelector("#B36122282037704243");
	// Acoes
	await selecionaEmpresa(frame, empresa);
	await selecionaData(frame, data);
	await escreveTexto(frame, texto);
	await indicaHoras(frame, tempoInicio, tempoFim);
	// Confirma
	await frame.click("#B36122282037704243");
	await frame.waitForTimeout(2000);
};

module.exports = modal;
