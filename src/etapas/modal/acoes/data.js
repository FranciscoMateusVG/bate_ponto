const selecionaData = async (frame, data) => {
	await frame.click(".icon-calendar");
	let datas = await frame.$x("//a[contains(@class, 'ui-state-default')]");
	await datas[data - 1].click();
};

module.exports = selecionaData;
